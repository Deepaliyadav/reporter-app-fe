import React, { useMemo, useState } from 'react';
import { Button, Modal, Text, TouchableOpacity, View } from 'react-native';
import GestureRecognizer from "react-native-swipe-gestures";
import { Image } from 'react-native';
import { modalStyles } from './create-story-styles';
import Video from "react-native-video";
import Icon from 'react-native-vector-icons/MaterialIcons';

function PreviewMediaModal({ visible, data =[], onCancel, index, onDelete }) {
    const [currentIndex, setCurrentIndex] = useState(index || 0);

    const currentImg = useMemo(() => {
        return data[currentIndex] || {};
    },[currentIndex])

    const onSwipeLeft = () => {
        console.log('left')
      if (currentIndex < data.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    };
  
    const onSwipeRight = () => {
        console.log('right')
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    };
    return (
        <Modal visible={visible} transparent={true} animationType="slide">
            <GestureRecognizer
                onSwipeLeft={onSwipeLeft}
                onSwipeRight={onSwipeRight}
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#000",
                }}
            >
                <View style={modalStyles.modalContainer}>
                    <View style={modalStyles.modalTop}>
                    <View style={modalStyles.flex}>
                            <TouchableOpacity style={modalStyles.circle} onPress={onCancel}>
                                <Icon name="close" size={13} color="#666666" />
                            </TouchableOpacity>
                            <View>
                                <Text style={modalStyles.imageName}>{currentImg.fileName || 'Image Preview'}</Text>
                            </View>
                    </View>
                    <View style={modalStyles.flex}>
                        <TouchableOpacity
                            style={{ ...modalStyles.circle, borderColor: global.colors.error }}
                            onPress={() => onDelete(currentIndex)}
                        >
                            <Icon name="delete" size={13} color={global.colors.error} />
                        </TouchableOpacity>
                    </View>
                    </View>
                    <View style={modalStyles.modalMain}>
                        {
                            currentImg.type.includes('image')
                            ? <Image source={{ uri: currentImg.uri }} style={{...modalStyles.previwImage}} />
                            :  <Video
                                    source={{ uri: currentImg.uri }}
                                    style={{ width: "100%", height: 300 }}
                                    controls
                                />
                        }
                    </View>
                </View>
            </GestureRecognizer>
      </Modal>
    )
}

export default PreviewMediaModal;