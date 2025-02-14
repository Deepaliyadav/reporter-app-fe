import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { Image, Video } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { createStoryStyles, mediaStyles } from './create-story-styles';

const AddMedia = () => {
    const [images, setImages] = useState([]);
    const [videos, setVideos] = useState([]);

    const pickMedia = () => {
        let options = {
            mediaType: 'mixed', // Allows both images and videos
            quality: 1,
            selectionLimit: 0, // Allows multiple selections
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorMessage) {
                console.log('ImagePicker Error:', response.errorMessage);
            } else {
                response.assets.forEach((media) => {
                    if (media.type.startsWith('image')) {
                        setImages((prevImages) => [...prevImages, media]);
                    } else if (media.type.startsWith('video')) {
                        setVideos((prevVideos) => [...prevVideos, media]);
                    }
                });
            }
        });
    };

    const removeImage = (uri) => {
        setImages((prevImages) => prevImages.filter((img) => img.uri !== uri));
    };

    const removeVideo = (uri) => {
        setVideos((prevVideos) => prevVideos.filter((vid) => vid.uri !== uri));
    };

    console.log({ videos });

    return (
        <View style={mediaStyles.container}>
            <View style={mediaStyles.headerView}>
                <View style={mediaStyles.leftHeader}>
                    <Text style={createStoryStyles.heading}>Select Media</Text>
                    <Text style={createStoryStyles.subHeading}>{images.length} Photos | {videos.length} Videos</Text>
                </View>
                <TouchableOpacity onPress={pickMedia} style={mediaStyles.mediaBtn}>
                    <Text style={mediaStyles.mediaBtnTxt}>Add New</Text>
                </TouchableOpacity>
            </View>

            {/* Images List */}
            <View style={mediaStyles.mediaContainer}>
                <FlatList
                    data={images}
                    keyExtractor={(item) => item.uri}
                    horizontal
                    renderItem={({ item }) => (
                        <View style={mediaStyles.mediaItem}>
                            <Image source={{ uri: item.uri }} style={mediaStyles.mediaThumbnail} />
                            <TouchableOpacity onPress={() => removeImage(item.uri)} style={mediaStyles.deleteBtn}>
                                <Text style={mediaStyles.deleteBtnText}>X</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>

            {/* Videos List */}
            {/* <FlatList
                data={videos}
                keyExtractor={(item) => item.uri}
                horizontal
                renderItem={({ item }) => (
                    <View style={mediaStyles.mediaItem}>
                        <Video
                            source={{ uri: item.uri }}
                            style={mediaStyles.mediaThumbnail}
                            controls
                        />
                        <TouchableOpacity onPress={() => removeVideo(item.uri)} style={mediaStyles.deleteBtn}>
                            <Text style={mediaStyles.deleteBtnText}>X</Text>
                        </TouchableOpacity>
                    </View>
                )}
            /> */}
        </View>
    );
};

export default AddMedia;
