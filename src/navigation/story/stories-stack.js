import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CreateStoryScreen, StoryListScreen } from '../../screens/stories';

const Stack = createStackNavigator();

function StoriesStack() {
  return (
    <Stack.Navigator initialRouteName="StoriesList" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="StoriesList" component={StoryListScreen} />
    </Stack.Navigator>
  );
}

export default StoriesStack;
