import React from 'react';
import { Field, Form } from 'react-final-form';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

import { InputField, PasswordInputField } from '../../components/form-fields';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation();

    const onSubmit = async (values) => {
        console.log('Form Submitted!', values);
        try {
            // Simulate API response (replace with real API call)
            const userData = { ...values ,token: 'sample_jwt_token' };
            // Store user data
            await AsyncStorage.setItem('user', JSON.stringify(userData));
            Alert.alert('Success', 'Login successful');
            setTimeout(() => {
                navigation.replace('Main');
            }, 100);
          } catch (error) {
            console.error('Error saving login data', error);
          }
    };

    const validate = values => {
        const errors = {};
        if (!values.username) {
            errors.username = 'UserName is required';
        }
        if (!values.password) {
            errors.password = 'Password is required';
        }
        return errors;
    };

  return (
    <View style={styles.container}>
         <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({ handleSubmit, values, submitting }) => (
                <View style={{ padding: 20 }}>
                    {console.log({ values })}
                    <Text style={styles.text}>Login</Text>
                    <Field name="username" component={InputField} label="Username:" placeholder="Enter username" />
                    <Field name="password" component={PasswordInputField} label="Password:" placeholder="Enter password" />
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
