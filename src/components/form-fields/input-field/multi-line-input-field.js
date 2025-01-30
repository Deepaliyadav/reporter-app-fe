import React from 'react';
import { View, Text, TextInput } from 'react-native';

const MultiLineInputField = ({ input, meta, label, ...rest }) => (
    <View style={{ marginBottom: 10 }}>
      <Text>{label}</Text>
      <TextInput
        {...input}
        {...rest}
        multiline
        numberOfLines={4}
        style={{
          minHeight: 100,
          borderColor: meta.touched && meta.error ? 'red' : '#ccc',
          borderWidth: 1,
          paddingHorizontal: 10,
          borderRadius: 5,
        }}
      />
      {meta.touched && meta.error && <Text style={{ color: 'red' }}>{meta.error}</Text>}
    </View>
  );

  export default MultiLineInputField;
