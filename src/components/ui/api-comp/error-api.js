import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { errorApiStyles } from './common-styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ErrorApi = ({ text, reload }) => {

  return (
    <View style={errorApiStyles.container}>
        <Icon
            name="error"
            size={31}
            color={global.colors.error}
            onPress={() => navigation.navigate('StoriesCreate')}
        />
        <View>
        <Text style={errorApiStyles.text}>{text}</Text>
        {reload && <Text style={errorApiStyles.text}>Click on the below button to reload!</Text>}
        </View>
        {reload && <TouchableOpacity onPress={reload} style={errorApiStyles.reloadbtn}>
            <Text style={errorApiStyles.reloadbtnTxt}>Reload</Text>
        </TouchableOpacity>}
    </View>
  );
};

export default ErrorApi;
