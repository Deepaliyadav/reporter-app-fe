import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ProfileScreen, ReportsScreen, StoriesScreen } from '../screens';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const MainStack = () => {
  return (
   <TabLayout />
  );
};

function TabLayout() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen
      name="Home"
      component={StoriesScreen}
      options={{
        tabBarIcon: ({ color, size }) => <Icon name="file-document-outline" size={size} color={color} />,
      }}
    />
    <Tab.Screen
      name="Search"
      component={ReportsScreen}
      options={{
        tabBarIcon: ({ color, size }) => <Icon name="magnify" size={size} color={color} />,
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ color, size }) => <Icon name="account" size={size} color={color} />,
      }}
    />
  </Tab.Navigator>
  );
}

export default MainStack;

function DrawerLayout() {
  return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={StoriesScreen} />
        <Drawer.Screen name="Reports" component={ReportsScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
  );
}
