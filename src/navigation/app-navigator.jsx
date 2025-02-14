import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoadingScreen from '../screens/loading-screen';
import AuthStack from './auth-stack';
import MainStack from './main-stack';
import { CreateStoryScreen } from '../screens/stories';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
      <Stack.Navigator initialRouteName="LoadingScreen">
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} options={{headerShown: false}} />
        <Stack.Screen name="Auth" component={AuthStack} options={{headerShown: false}} />
        <Stack.Screen name="Main" component={MainStack} options={{headerShown: false}} />
        <Stack.Screen name="StoriesCreate" component={CreateStoryScreen} options={{headerShown: false}} />
      </Stack.Navigator>
  );
};

export default AppNavigator;
