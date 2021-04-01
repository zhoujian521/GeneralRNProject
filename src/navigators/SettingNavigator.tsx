import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SettingScreen from '../screens/SettingStack/Settings/SettingScreen';

export type SettingParamList = {setting: undefined};

const Stack = createStackNavigator<SettingParamList>();

export const SettingNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: true,
      gestureEnabled: true,
      headerStyle: {backgroundColor: '#f4511e'},
      headerTintColor: '#fff',
      headerTitleStyle: {fontWeight: 'bold'},
    }}>
    <Stack.Screen name="setting" component={SettingScreen} />
  </Stack.Navigator>
);

const exitRoutes = ['home'];
export const canExit = (routeName: string) => exitRoutes.includes(routeName);
