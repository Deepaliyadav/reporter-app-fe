import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, OtpScreen } from '../screens/auth';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="OTP" component={OtpScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
