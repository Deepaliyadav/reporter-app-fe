import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from 'react-native-vector-icons';
import { HomeScreen, ProfileScreen, ReportsScreen } from '../screens';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const MainStack = () => {
  return (
   <DrawerLayout />
  );
};

function DrawerLayout() {
  return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Reports" component={ReportsScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
  );
}

function TabLayout() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      // options={{
      //   tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />,
      // }}
    />
    <Tab.Screen
      name="Reports"
      component={ReportsScreen}
      // options={{
      //   tabBarIcon: ({ color, size }) => <Ionicons name="document-text-outline" size={size} color={color} />,
      // }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      // options={{
      //   tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" size={size} color={color} />,
      // }}
    />
  </Tab.Navigator>
  )
}

export default MainStack;
