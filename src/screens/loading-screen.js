import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, StyleSheet, Image, Dimensions, ActivityIndicator, Text } from 'react-native';
const { width, height } = Dimensions.get('window');

const LoadingScreen = () => {
  const navigation = useNavigation();

    useEffect(() => {
    setTimeout(() => {
      // Check if user is authenticated
      const checkLogin = async () => {
        const user = await AsyncStorage.getItem('user');
        const isAuthenticated = !!user || true;
        navigation.replace(isAuthenticated ? 'Main' : 'Auth');
      };
      checkLogin();
    }, 4000);
  }, [navigation]);

   return (
    <View style={styles.container}>
      <Image source={require('../assets/bccllogo.png')} style={styles.image} resizeMode="contain" />
      <View style={styles.bottomView}>
        <ActivityIndicator size="large" />
        <Text style={styles.welcomeText}>Welcome to Reporters App</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { height, paddingLeft: 10, paddingRight: 10 },
  image: {
    width: width - 20,
    height: 200,
  },
  bottomView: {
    height: height - 250,
    justifyContent: 'center',
  },
  welcomeText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
export default LoadingScreen;
