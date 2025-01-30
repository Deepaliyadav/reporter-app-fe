import React from 'react';
import { Field, Form } from 'react-final-form';
import { View, Text, StyleSheet, Button } from 'react-native';
import { InputField, PasswordInputField } from '../../components/form-fields';

const LoginScreen = () => {

    const onSubmit = (values) => {
        console.log('Form Submitted!', values);
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
            render={({ handleSubmit, values }) => (
                <View style={{ padding: 20 }}>
                    {console.log({ values })}
                    <Text style={styles.text}>Login</Text>
                    <Field name="username" component={InputField} label="Username:" placeholder="Enter username" />
                    <Field name="password" component={PasswordInputField} label="Password:" placeholder="Enter password" />
                    <Button title="Login" onPress={handleSubmit} />
                </View>
            )}
            />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', },
  text: { fontSize: 20, fontWeight: 'bold', textAlign: 'center' },
});

export default LoginScreen;
