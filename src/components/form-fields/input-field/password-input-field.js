import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';

const PasswordInputField = ({ input, meta, label, ...rest }) => {
  const [secure, setSecure] = useState(true);

  return (
    <View style={{ marginBottom: 10 }}>
      <Text>{label}</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderRadius: 5 }}>
        <TextInput
          {...input}
          {...rest}
          secureTextEntry={secure}
          style={{ flex: 1, height: 40, paddingHorizontal: 10 }}
        />
        <TouchableOpacity onPress={() => setSecure(!secure)} style={{ padding: 10 }}>
          <Text>{secure ? '👁️' : '🙈'}</Text>
        </TouchableOpacity>
      </View>
      {meta.touched && meta.error && <Text style={{ color: 'red' }}>{meta.error}</Text>}
    </View>
  );
};

export default PasswordInputField;
