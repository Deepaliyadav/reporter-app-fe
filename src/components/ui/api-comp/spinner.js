import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { spinnerStyles } from './common-styles';

const Spinner = ({ text }) => {

  return (
    <View style={spinnerStyles.container}>
        <ActivityIndicator size={35} />
        <Text style={spinnerStyles.text}>{text}</Text>
    </View>
  );
};

export default Spinner;
