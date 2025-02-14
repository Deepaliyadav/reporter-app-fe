import React from 'react';
import { Form } from 'react-final-form';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, Alert, TouchableOpacity, ActivityIndicator, Image, useWindowDimensions } from 'react-native';
import { OtpInput } from 'react-native-otp-entry';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useMutation } from '@tanstack/react-query';
import { loginStyles } from './login-styles'; // Import the styles

const OtpScreen = () => {
    const navigation = useNavigation();
    const { width, height } = useWindowDimensions(); // Dynamically get screen dimensions
    const route = useRoute();
    const { mobile = '' } = route.params; // Receiving the data

    const sendOtp = async (values) => {
        let data = {
            channel: 'beans',
            phone: mobile,
            cus_id: 1234,
            otp: values.otp,
        };
        console.log({ data });
        const response = await fetch('https://k19w0lom7j.execute-api.ap-south-1.amazonaws.com/dev/otp/verify-otp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        console.log({ result });
        return result;
    };

    const mutation = useMutation({
        mutationFn: sendOtp,
        onSuccess: async (userData) => {
            console.log('Success:', userData);
            if (userData?.token) {
                await AsyncStorage.setItem('user', JSON.stringify(userData));
                setTimeout(() => {
                    navigation.replace('Main');
                });
            }
        },
        onError: (error) => {
            console.error('Error:', error);
            Alert.alert('Login Failed', error.response?.data?.message || 'Something went wrong');
        },
    });

    const validate = values => {
        const errors = {};
        if (!values.otp) {
            errors.otp = 'OTP is required';
        }
        return errors;
    };

    return (
        <View style={[loginStyles.container, { height }]}> 
            <Image 
                source={require('../../assets/login-img.jpg')} 
                style={[loginStyles.image, { width, height: height * 0.6 }]} 
                resizeMode="contain"
            />
            <View style={[loginStyles.bottomView, { height: height * 0.4 }]}> 
                <Form
                    onSubmit={(values) => mutation.mutate(values)}
                    validate={validate}
                    render={({ handleSubmit, form }) => (
                        <View>
                            <Text style={[loginStyles.text]}>Enter your code</Text>
                            <Text style={[loginStyles.subText]}>Enter your 6-digit code sent to <Text>{mobile}</Text> to login.</Text>
                            <OtpInput
                                numberOfDigits={6}
                                onTextChange={(text) => form.change('otp', text)}
                                type="numeric"
                                placeholder="******"
                                textInputProps={{ accessibilityLabel: 'One-Time Password' }}
                                theme={{
                                    pinCodeContainerStyle: loginStyles.pinCodeContainer,
                                    pinCodeTextStyle: loginStyles.pinCodeText,
                                }}
                            />
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
        </View>
    );
};

export default OtpScreen;
