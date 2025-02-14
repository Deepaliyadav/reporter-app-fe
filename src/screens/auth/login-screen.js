import React from 'react';
import { Field, Form } from 'react-final-form';
import { View, Text, Alert, ActivityIndicator, TouchableOpacity, useWindowDimensions, Image, TextInput, SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useMutation } from '@tanstack/react-query';
import { loginStyles } from './login-styles'; // Import the styles

const LoginScreen = () => {
    const navigation = useNavigation();
    const { width, height } = useWindowDimensions(); // Responsive width & height

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
        return { ...result, mobile: values.mobile };
    };

    const mutation = useMutation({
        mutationFn: sendOtp,
        onSuccess: async (userData) => {
            if (userData?.status) {
                navigation.replace('OTP', { mobile: userData.mobile });
            }
        },
        onError: (error) => {
            console.error('Error:', error);
            Alert.alert('Login Failed', error.response?.data?.message || 'Something went wrong');
        },
    });

    const validate = values => {
        const errors = {};
        if (!values.mobile) {
            errors.mobile = 'UserName is required';
        }
        return errors;
    };

    return (
        <SafeAreaView style={[loginStyles.container, { height }]}>
            <Image 
                source={require('../../assets/login-img.jpg')} 
                style={[loginStyles.image, { width, height: height * 0.6 }]} 
                resizeMode="contain"
            />
            <View style={[loginStyles.bottomView, { height: height * 0.4 }]}>
                <Form
                    onSubmit={(values) => mutation.mutate(values)}
                    validate={validate}
                    render={({ handleSubmit }) => (
                        <View>
                            <Text style={[loginStyles.text]}>Enter your phone number</Text>
                            <Text style={[loginStyles.subText]}>
                                You will receive a 6-digit code for phone number verification
                            </Text>
                            <Field name="mobile" component={NumberInputField} placeholder="Phone number" />
                            <TouchableOpacity
                                style={[loginStyles.button, { width: width * 0.9 }]}
                                disabled={mutation.isLoading}
                                onPress={handleSubmit}
                            >
                                {mutation.isPending ? (
                                    <ActivityIndicator size="small" color="#fff" />
                                ) : (
                                    <Text style={[loginStyles.buttonText]}>Continue</Text>
                                )}
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        </SafeAreaView>
    );
};

const NumberInputField = ({ input, meta, label, ...rest }) => (
    <View style={{ marginBottom: 10 }}>
        <Text style={{ marginBottom: 10, fontSize: 17, fontWeight: 'bold' }}>{label}</Text>
        <TextInput
            keyboardType="number"
            {...input}
            {...rest}
            style={[
                loginStyles.loginInput, 
                { borderColor: meta.touched && meta.error ? 'red' : '#ccc', fontSize: 16 }
            ]}
        />
        {meta.touched && meta.error && <Text style={{ color: 'red' }}>{meta.error}</Text>}
    </View>
);

export default LoginScreen;
