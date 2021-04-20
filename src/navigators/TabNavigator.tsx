import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HomeNavigator } from '../navigators/HomeNavigator';
import { SettingNavigator } from '../navigators/SettingNavigator';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarVisible: route.name === 'Home' || route.name === 'Settings',
        // focused
        tabBarIcon: ({ color, size }) => {
          // console.log('======>', focused, color, size);
          let iconName: string = '';
          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = 'settings-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={HomeNavigator} options={() => ({ tabBarLabel: 'Home!' })} />
      <Tab.Screen
        name="Settings"
        component={SettingNavigator}
        options={{
          // tabBarVisible: false,
          tabBarLabel: 'Settings!',
        }}
      />
    </Tab.Navigator>
  );
};
