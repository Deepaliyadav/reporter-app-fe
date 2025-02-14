import React from 'react';
import { View, Text, TextInput } from 'react-native';

const NumberInputField = ({ input, meta, label, ...rest }) => (
    <View style={{ marginBottom: 10 }}>
      <Text style={{ marginBottom: 10, fontSize: 17, fontWeight: 'bold' }}>{label}</Text>
      <TextInput
        keyboardType="number"
        {...input}
        {...rest}
        style={{
          height: 45,
          borderColor: meta.touched && meta.error ? 'red' : '#ccc',
          borderWidth: 1,
          paddingHorizontal: 10,
          borderRadius: 5,
          fontSize: 16
        }}
      />
      {meta.touched && meta.error && <Text style={{ color: 'red' }}>{meta.error}</Text>}
    </View>
  );

  export default NumberInputField;
