import React from 'react';
import { Field, Form } from 'react-final-form';
import { View, Text, StyleSheet, Button } from 'react-native';
import { MultiLineInputField } from '../../components/form-fields';

const HomeScreen = () => {
  const onSubmit = (values) => {
    console.log('Form Submitted!', values);
};

const validate = values => {
    const errors = {};
    if (!values.report) {
        errors.report = 'Report is required';
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
                    <Text style={styles.text}>Punch Report</Text>
                    <Field name="report" component={MultiLineInputField} label="Report" placeholder="Enter report" />
                    <Button title="Punch" onPress={handleSubmit} />
                </View>
            )}
            />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  text: { fontSize: 20, fontWeight: 'bold', textAlign: 'center' },
});

export default HomeScreen;
