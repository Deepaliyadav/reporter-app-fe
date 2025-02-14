import React, { useState } from 'react';
import { ActivityIndicator, Alert, Dimensions, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Field, Form } from 'react-final-form';
import { useMutation } from '@tanstack/react-query';
import { Image, Video } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

import { GoBackHeader } from '../../../components/ui';
import { createStoryStyles } from './create-story-styles';
import { InputField, MultiLineInputField } from '../../../components/form-fields';

const { height } = Dimensions.get('window');

const CreateStoryScreen = ({ navigation }) => {
    function buildChildren() {
        return (
            <View style={createStoryStyles.headerContainer}>
                <Text style={createStoryStyles.headertext}>Create New Story</Text>
            </View>
        );
    }

    const sendOtp = async (values) => {
        let data = {
            channel: 'beans',
            phone: values.mobile,
            cus_id: 1234,
        };
        const response = await fetch('https://k19w0lom7j.execute-api.ap-south-1.amazonaws.com/dev/otp/send-otp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          });
          const result = await response.json();
        return result;
    };

    const mutation = useMutation({
        mutationFn: sendOtp,
        onSuccess: async (userData) => {
            if (userData?.status) {
                navigation.replace('OTP');
            }
        },
        onError: (error) => {
            console.error('Error:', error);
            Alert.alert('Login Failed', error.response?.data?.message || 'Something went wrong');
        },
    });
    console.log(mutation.isLoading, { mutation });

    const validate = values => {
        const errors = {};
        if (!values.title) {
            errors.title = 'Title is required';
        }
        if (!values.body) {
            errors.body = 'Body is required';
        }
        return errors;
    };

    return (
        <View>
            <GoBackHeader
                navigation={navigation}
                children={buildChildren()}
            />
            <View style={{ ...createStoryStyles.mainContainer, height: height - 100 }}>
                <Form
                    onSubmit={(values) => mutation.mutate(values)}
                    validate={validate}
                    render={({ handleSubmit }) => (
                        <View style={createStoryStyles.formContainer}>
                            {/* <Field name="mobile" component={Nu÷.mberInputField} placeholder="Phone number" /> */}
                            <FormField />
                            <View style={createStoryStyles.buttonView}>
                                <TouchableOpacity
                                    style={{ ...createStoryStyles.button, ...createStoryStyles.draftBtn }}
                                    disabled={mutation.isLoading}
                                    onPress={handleSubmit}
                                >
                                    {mutation.isPending ? (
                                        <ActivityIndicator size="small" color="#fff" />
                                    ) : (
                                        <Text style={createStoryStyles.buttonText}>Save as Draft</Text>
                                    )}
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={createStoryStyles.button}
                                    disabled={mutation.isLoading}
                                    onPress={handleSubmit}
                                >
                                    {mutation.isPending ? (
                                        <ActivityIndicator size="small" color="#fff" />
                                    ) : (
                                        <Text style={createStoryStyles.buttonText}>Create</Text>
                                    )}
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                />
            </View>
        </View>
    );
};

function FormField() {
    return (
        <ScrollView style={createStoryStyles.topView}>
            <Text style={createStoryStyles.heading}>Select Media</Text>
            <Text style={createStoryStyles.subHeading}>0 Photos | 0 Video</Text>
            <MediaPicker />
            <Text style={createStoryStyles.heading}>Story Details</Text>
            <Text style={createStoryStyles.subHeading}>Fill all mandatory fields</Text>

            <Text style={createStoryStyles.label}>Title*</Text>
            <Field name="title" component={InputField} />

            <Text style={createStoryStyles.label}>Story Body*</Text>
            <Field name="body" component={MultiLineInputField} />

            <Text style={createStoryStyles.label}>Short Headline</Text>
            <Field name="headline" component={InputField} />

            <Text style={createStoryStyles.label}>Kicker</Text>
            <Field name="kicker" component={InputField} />

            <Text style={createStoryStyles.label}>Caption</Text>
            <Field name="caption" component={InputField} />
        </ScrollView>
    );
}

const MediaPicker = () => {
    const [selectedMedia, setSelectedMedia] = useState(null);

    const pickMedia = () => {
        let options = {
            mediaType: 'mixed', // 'photo' | 'video' | 'mixed'
            quality: 1,
            selectionLimit: 1,
        };

        launchImageLibrary(options, (response) => {
            console.log({ response });
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error:', response.error);
            } else {
                const media = response.assets[0]; // Get first selected media
                setSelectedMedia(media);
            }
        });
    };
    console.log({ selectedMedia });

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={pickMedia} style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}>
                <Text style={{ color: 'white', fontSize: 16 }}>Select Photo / Video</Text>
            </TouchableOpacity>

            {selectedMedia && (
                <View style={{ marginTop: 20 }}>
                    {selectedMedia.type.startsWith('image') ? (
                        <Image source={{ uri: selectedMedia.uri }} style={{ width: 300, height: 300, borderRadius: 10 }} />
                    ) : (
                        <Video
                            source={{ uri: selectedMedia.uri }}
                            style={{ width: 300, height: 300 }}
                            controls
                        />
                    )}
                </View>
            )}
        </View>
    );
};

export default CreateStoryScreen;
