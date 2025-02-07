import React from 'react';
import { Field, Form } from 'react-final-form';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

import { InputField, NumberInputField, PasswordInputField } from '../../components/form-fields';
import { useNavigation } from '@react-navigation/native';
import { useMutation } from '@tanstack/react-query';

const LoginScreen = () => {
    const navigation = useNavigation();

    const sendOtp = async (values) => {
        let data = {
            channel: 'beans',
            phone: values.mobile,
            cus_id: 1234,
        };
        console.log({ data });
        // const response = await axios.post('https://k19w0lom7j.execute-api.ap-south-1.amazonaws.com/dev/otp/send-otp', data);
        const response = await fetch('https://k19w0lom7j.execute-api.ap-south-1.amazonaws.com/dev/otp/send-otp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          });
          const result = await response.json();
          console.log({ result });
        return response.data; // Ensure the response is returned
    };

    const mutation = useMutation({
        mutationFn: sendOtp,
        onSuccess: async (userData) => {
            console.log('Success:', userData);
            if (userData?.status) {
                navigation.replace('OTP');
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
    <View style={styles.container}>
         <Form
            onSubmit={(values) => mutation.mutate(values)}
            validate={validate}
            render={({ handleSubmit, values, submitting }) => (
                <View style={{ padding: 20 }}>
                    <Text style={styles.text}>Login</Text>
                    <Field name="mobile" component={NumberInputField} label="Mobile:" placeholder="Enter Number" />
                    {/* <Field name="password" component={PasswordInputField} label="Password:" placeholder="Enter password" /> */}
                    <Button title="Login" disabled={submitting} onPress={handleSubmit} />
                </View>
            )}
            />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' },
  text: { fontSize: 20, fontWeight: 'bold', textAlign: 'center' },
});

export default LoginScreen;
