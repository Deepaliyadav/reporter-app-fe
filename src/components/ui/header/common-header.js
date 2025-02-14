import React from 'react';
import { Image, View } from 'react-native';
import { commonHeaderStyles } from './header-styles';

const CommonHeader = ({ children }) => {

  return (
    <View style={commonHeaderStyles.container}>
        <Image source={require('../../../assets/bccl-header-logo.png')} style={{ ...commonHeaderStyles.image }} resizeMode="contain"/>
        <View>{children}</View>
    </View>
  );
};

export default CommonHeader;
