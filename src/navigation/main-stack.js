import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons } from 'react-native-vector-icons';
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
    />
    <Tab.Screen
      name="Reports"
      component={ReportsScreen}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
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
