import React from 'react';
import { Dimensions, View } from 'react-native';
import { goBackHeaderStyles } from './header-styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
const { width } = Dimensions.get('window');

const GoBackHeader = ({ navigation, children }) => {

  return (
    <View style={goBackHeaderStyles.container}>
        <Icon name="arrow-back-ios" size={25} onPress={() => navigation.goBack()} />
        <View style={{ width: width - 60 }}>{children}</View>
    </View>
  );
};

export default GoBackHeader;
