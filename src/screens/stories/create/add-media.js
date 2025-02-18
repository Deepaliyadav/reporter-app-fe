import React, { useState } from 'react';
import { Button, FlatList, Modal, Text, TouchableOpacity, View } from 'react-native';
import { Image } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { createStoryStyles, mediaStyles, modalStyles } from './create-story-styles';
import Video from "react-native-video";
import { createThumbnail } from "react-native-create-thumbnail";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

const AddMedia = () => {
    const [images, setImages] = useState([]);
    const [videos, setVideos] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

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
                        setImages((prevImages) => [...prevImages, media]);
                    } else if (media.type.startsWith('video')) {
                        const thumbnail = await createThumbnail({ url: media.uri });
                        const video = { ...media, thumbnail: thumbnail.path };
                        setVideos((prevVideos) => [...prevVideos, video]);
                    }
                });
            }
        });
    };

    const removeImage = (uri) => {
        setImages((prevImages) => prevImages.filter((img) => img.uri !== uri));
    };

    const deleteVideo = (index) => {
        setVideos((prevVideos) => prevVideos.filter((vid, i) => index !== i));
    };

    console.log({ modalVisible });

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
            {images.length > 0 && <Text style={createStoryStyles.subHeading}>Added Photos</Text>}
            <View style={mediaStyles.mediaContainer}>
                <FlatList
                    data={images}
                    keyExtractor={(item) => item.uri}
                    horizontal
                    renderItem={({ item }) => (
                        <View style={mediaStyles.mediaItem}>
                            <Image source={{ uri: item.uri }} style={mediaStyles.mediaThumbnail} />
                            <View style={mediaStyles.overlay}>
                                <Icon2 name="eye" size={35} color="#000" style={mediaStyles.playButton} onPress={() =>  setModalVisible({ ...item })} />
                                <Icon name="close" size={18} color="#fff" style={mediaStyles.deleteButton} onPress={() =>  removeImage(item.uri)} />
                            </View>
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
                        <Image source={{ uri: item.thumbnail || item.uri }} style={mediaStyles.mediaThumbnail} />

                        {/* Overlay with Play & Delete Buttons */}
                        <View style={mediaStyles.overlay}>
                        <Icon name="play-circle" size={50} color="#000" style={mediaStyles.playButton} onPress={() =>  setModalVisible(item)} />
                        <Icon name="close" size={18} color="#fff" style={mediaStyles.deleteButton} onPress={() =>  deleteVideo(index)} />
                        </View>
                    </View>
                    )}
                />
            </View>
            {
                modalVisible &&
                <ViewVideoModal visible={!!modalVisible} item={modalVisible} onCancel={() => setModalVisible(false)} />
            }
        </View>
    );
};

function ViewVideoModal({ visible, item, onCancel }) {
    return (
        <Modal visible={visible} transparent={true} animationType="slide">
        <View style={modalStyles.modalContainer}>
         <View style={modalStyles.modalTop}>
            {
                item.type.includes('image')
                ? <Image source={{ uri: item.uri }} style={{...modalStyles.previwImage}} />
                :  <Video
                        source={{ uri: item.uri }}
                        style={{ width: "100%", height: 300 }}
                        controls
                        // fullscreen
                    />
            }
         </View>
          <Button style={modalStyles.closebtn} title="Close" onPress={onCancel} />
        </View>
      </Modal>
    )
}

export default AddMedia;
