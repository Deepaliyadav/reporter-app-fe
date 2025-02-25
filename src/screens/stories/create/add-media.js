import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Button, FlatList, Modal, Text, TouchableOpacity, View } from 'react-native';
import { Image } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { createStoryStyles, mediaStyles, modalStyles } from './create-story-styles';
import axios from 'axios';
import Video from "react-native-video";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import { uploadFile } from '../../../utils/upload-util';
import PreviewMediaModal from './preview-media-modal';
import { isNotEmptyObject } from '../../../utils/type-util';

const AddMedia = ({ form, values }) => {
    const [images, setImages] = useState([]);
    const [videos, setVideos] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        form.change('images', images.map(el => {
            return el.uri;
        }))
        form.change('videos', videos.map(el => {
            return el.uri;
        }))
    }, [images, videos]);

    const pickMedia = () => {
        let options = {
            mediaType: 'mixed', // Allows both images and videos
            quality: 1,
            selectionLimit: 0, // Allows multiple selections
        };

        launchImageLibrary(options, async (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorMessage) {
                console.log('ImagePicker Error:', response.errorMessage);
            } else {
                response.assets.forEach(async (media) => {
                    if (media.type.startsWith('image')) {
                        console.log('called  1')
                        setImages((prevImages) => [...prevImages, { ...media, load: false }]);
                        // const uploadData = await uploadFile(media)
                        // if (uploadData.s) {
                        //     setTimeout(() => {
                        //         console.log('called 2')
                        //         setImages((prevImages) => {
                        //             const updatedprevData = prevImages.filter(el => !el.load);
                        //             return [...updatedprevData, { ...media, uri: uploadData.url, load: false }]
                        //         });
                        //     })
                        // } else {
                        //     // Alert
                        //     setImages((prevImages) => {
                        //         const updatedprevData = prevImages.filter(el => !el.load);
                        //         return [...updatedprevData, { ...media, load: false, fail: true }]
                        //     });
                        // }
                    
                    } else if (media.type.startsWith('video')) {
                        setVideos((prevImages) => [...prevImages, { ...media, load: true }]);
                        const uploadData = await uploadFile(media)
                        if (uploadData.s) {
                            const { url } = uploadData;
                            // const thumbnail = await createThumbnail({ url });
                            const video = { ...media, uri: url, thumbnail: 'thumbnail.path', load: false };
                            console.log({ video })
                            setTimeout(() => {
                                console.log('called 2')
                                setVideos((prevVideos) => {
                                    const updatedprevData = prevVideos.filter(el => !el.load);
                                    return [...updatedprevData, video]
                                });
                            })
                        } else {
                            setVideos((prevVideos) => {
                                const updatedprevData = prevVideos.filter(el => !el.load);
                                return [...updatedprevData, { ...media, load: false, fail: true }]
                            });
                        }
                    }
                });
            }
        });
    };

    const removeImage = (index) => {
        setImages((prevImages) => prevImages.filter((img, i) => index !== i));
        setModalVisible(false);
    };

    const deleteVideo = (index) => {
        setVideos((prevVideos) => prevVideos.filter((vid, i) => index !== i));
        setModalVisible(false);
    };

    console.log({ images });

    const isBtnDisabled = useCallback(() => {
        let img = images.some(el => el.load);
        let video = videos.some(el => el.load);
        return (img || video);  
    }, [images, videos]);


    return (
        <View style={mediaStyles.container}>
            <View style={mediaStyles.headerView}>
                <View style={mediaStyles.leftHeader}>
                    <Text style={createStoryStyles.heading}>Select Media</Text>
                    <Text style={createStoryStyles.subHeading}>{images.length} Photos | {videos.length} Videos</Text>
                </View>
                <TouchableOpacity
                    disabled={isBtnDisabled()}
                    onPress={pickMedia}
                    style={{ ...mediaStyles.mediaBtn, opacity: isBtnDisabled() ? 0.7 : 1 }}
                >
                    <Text style={mediaStyles.mediaBtnTxt}>Add New</Text>
                </TouchableOpacity>
            </View>

            {/* Images List */}
            {images.length > 0 && <Text style={createStoryStyles.subHeading}>Added Photos</Text>}
            <View style={mediaStyles.mediaContainer}>
                <FlatList
                    data={images}
                    keyExtractor={(item) => item.uri}
                    horizontal
                    renderItem={({ item, index }) => (
                        <View style={mediaStyles.mediaItem}>
                            {
                                item.load && <View style={mediaStyles.loadImages}>
                                    <ActivityIndicator color='#fff' />
                                </View>
                            }
                            {
                            (item.fail) && <View style={mediaStyles.loadImages}>
                                <Icon
                                        name="error"
                                        size={21}
                                        color={global.colors.error}
                                        onPress={() => navigation.navigate('StoriesCreate')}
                                    />
                                    <Text style={mediaStyles.loadTxt}>Unable to upload</Text>
                                </View>
                            }
                            { !item.load && !item.fail &&
                                <>
                                    <Image source={{ uri: item.uri }} style={mediaStyles.mediaThumbnail} />
                                    <View style={mediaStyles.overlay}>
                                        <Icon2 name="eye" size={28} color="#000" style={mediaStyles.playButton} onPress={() =>  setModalVisible({ index, data: images })} />
                                        <View style={mediaStyles.deleteButton}>
                                            <Icon name="close" size={13} color="#fff" onPress={() =>  removeImage(index)} />
                                        </View>
                                    </View>
                                </>
                            }
                        </View>
                    )}
                />

                {/* Videos List */}
                {videos.length > 0 && <Text style={createStoryStyles.subHeading}>Added Video</Text>}
                <FlatList
                    data={videos}
                    horizontal
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                    <View style={mediaStyles.mediaItem}>
                        {
                            item.load && <View style={mediaStyles.loadImages}>
                                <ActivityIndicator color='#fff' />
                            </View>
                        }
                        {
                            (item.fail) && <View style={mediaStyles.loadImages}>
                               <Icon
                                    name="error"
                                    size={21}
                                    color={global.colors.error}
                                    onPress={() => navigation.navigate('StoriesCreate')}
                                />
                                <Text style={mediaStyles.loadTxt}>Unable to upload</Text>
                            </View>
                        }
                        {!item.load && !item.fail &&
                            <>
                                <Image source={{ uri: item.thumbnail || item.uri }} style={mediaStyles.mediaThumbnail} />
                                <View style={mediaStyles.overlay}>
                                    <Icon name="play-circle" size={50} color="#000" style={mediaStyles.playButton} onPress={() =>  setModalVisible({ index, data: videos, video: true })} />
                                    <View style={mediaStyles.deleteButton}>
                                        <Icon name="close" size={13} color="#fff" onPress={() => deleteVideo(index)} />
                                    </View>
                                </View>
                            </>
                        }
                    </View>
                    )}
                />
            </View>
            {
                isNotEmptyObject(modalVisible) &&
                <PreviewMediaModal
                    visible={!!modalVisible}
                    data={modalVisible.data}
                    index={modalVisible.index}
                    isvideo={!!modalVisible.video}
                    onCancel={() => setModalVisible(false)}
                    onDelete={modalVisible.video ? deleteVideo : removeImage}
                />
            }
        </View>
    );
};

export default AddMedia;
