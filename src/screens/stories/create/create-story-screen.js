import React, { useMemo } from 'react';
import { ActivityIndicator, Alert, Dimensions, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Field, Form } from 'react-final-form';
import { useMutation } from '@tanstack/react-query';

import { GoBackHeader } from '../../../components/ui';
import { createStoryStyles } from './create-story-styles';
import { InputField, MultiLineInputField } from '../../../components/form-fields';
import AddMedia from './add-media';
import AddAttachments from './add-attachments';
import FetchLocation from './fetch-location';

const { height } = Dimensions.get('window');

const CreateStoryScreen = ({ navigation }) => {
    function buildChildren() {
        return (
            <View style={createStoryStyles.headerContainer}>
                <Text style={createStoryStyles.headertext}>Create New Story</Text>
            </View>
        );
    }

    const initialValues = useMemo(() => {
        return {
            images: [],
            videos: [],
            attachments: []
        }
    }, []);

    const sendOtp = async (values) => {
        const data = {
            ...values,
            createdBy: { name: 'Deepali', mobile: '8700242851' }
        }
        console.log({ data })

        const response = await fetch('http://65.2.116.173:8080/api/punch/story', {
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
            if (userData?.success) {
                navigation.replace('StoriesList');
            }
        },
        onError: (error) => {
            console.error('Error:', error);
            Alert.alert('Login Failed', error.response?.data?.message || 'Something went wrong');
        },
    });

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
        <View style={createStoryStyles.outerView}>
            <GoBackHeader
                navigation={navigation}
                children={buildChildren()}
            />
            <View style={createStoryStyles.mainContainer}>
                <Form
                    onSubmit={(values) => mutation.mutate(values)}
                    validate={validate}
                    initialValues={initialValues}
                    render={({ handleSubmit, form, values }) => (
                        <View style={createStoryStyles.formContainer}>
                            {/* {console.log({ values })} */}
                            <FormField form={form} values={values} />
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
                                    disabled={false}
                                    onPress={() => mutation.mutate({ ...values, status: 'SUCCESS' })}
                                >
                                    {mutation.isPending ? (
                                        <ActivityIndicator size="small" color="#fff" />
                                    ) : (
                                        <Text style={createStoryStyles.buttonText}>Submit</Text>
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

function FormField({ form, values }) {
    return (
        <ScrollView style={createStoryStyles.topView}>
            <AddMedia form={form} values={values} />
            <AddAttachments form={form} values={values} />
            <FetchLocation form={form} />
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

export default CreateStoryScreen;
