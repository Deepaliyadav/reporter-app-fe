import React from 'react';
import { View, Text, TextInput } from 'react-native';

const InputField = ({ input, meta, label, ...rest }) => (
    <View style={{ marginBottom: 10 }}>
      <TextInput
        {...input}
        {...rest}
        style={{
          height: 40,
          borderColor: meta.touched && meta.error ? 'red' : '#ccc',
          borderWidth: 1,
          paddingHorizontal: 10,
          borderRadius: 5,
        }}
      />
      {meta.touched && meta.error && <Text style={{ color: 'red' }}>{meta.error}</Text>}
    </View>
  );

  export default InputField;
