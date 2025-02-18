import React, { useState } from 'react';
import { Alert, FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { pick } from '@react-native-documents/picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { createStoryStyles, mediaStyles } from './create-story-styles';
import { viewDocument } from '@react-native-documents/viewer';

const AddAttachments = () => {
    const [attachments, setAttachments] = useState([]);

    const pickDocument = async () => {
        try {
            const [pickResult] = await pick();
            setAttachments([...attachments, pickResult]);
            // const [pickResult] = await pick({mode:'import'}) // equivalent
            // do something with the picked file
          } catch (err) {
            // see error handling
            Alert.alert('Error', 'Something went wrong!');
          }
    };

    console.log({ attachments });
    const removeAttachment = (uri) => {
        setAttachments((prev) => prev.filter((file) => file.uri !== uri));
    };

    const viewDoc = (uri) => {
        console.log(uri);
        viewDocument({ uri }).catch(err => {
            console.log({ err });
            Alert.alert('Error', 'This file type is not supported for view.');
        });
    };

    return (
        <View style={mediaStyles.container}>
            <Text style={createStoryStyles.subHeading}>Attachment</Text>
            <View style={mediaStyles.headerView}>
                <View style={mediaStyles.leftHeaderAttach}>
                    <Text>
                        Attach - .pdf,.ppt,.word,.etc
                    </Text>
                </View>
                <TouchableOpacity onPress={pickDocument} style={mediaStyles.mediaBtn}>
                    <Text style={mediaStyles.mediaBtnTxt}>Choose</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={[mediaStyles.mediaContainer]}>
                <FlatList
                    data={attachments}
                    keyExtractor={(item) => item.name}
                    nestedScrollEnabled={true}
                    renderItem={({ item }) => (
                        <View style={mediaStyles.attachItem}>
                            <TouchableOpacity style={mediaStyles.attachItemLeft} onPress={() => viewDoc(item.uri)}>
                                <Icon name={getIconName(item.name)} size={25} />
                                <Text>{item.name}</Text>
                            </TouchableOpacity>
                            <Icon name="close" size={24} onPress={() => removeAttachment(item.uri)} />
                        </View>
                    )}
                />
            </ScrollView>
        </View>
    );
};

function getIconName(name) {
    const extension = name.split('.')[1];
    if (extension.includes('pdf')) {
        return 'file-pdf-box';
    } else if (extension.includes('doc')) {
        return 'file-word-box';
    } else {
        return 'text-box';
    }
}

export default AddAttachments;
