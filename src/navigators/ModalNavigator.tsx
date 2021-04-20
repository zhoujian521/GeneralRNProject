import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Modal001Screen from '../screens/ModalStack/Modal001Screen';
import Modal002Screen from '../screens/ModalStack/Modal002Screen';

export type ModalParamList = {
  modal001: undefined;
  modal002: undefined;
};

const Stack = createStackNavigator<ModalParamList>();

export const ModalNavigator = () => (
  <Stack.Navigator initialRouteName={'modal001'} mode="modal">
    <Stack.Screen name="modal001" component={Modal001Screen} options={{ headerShown: false }} />
    <Stack.Screen name="modal002" component={Modal002Screen} options={{ headerShown: false }} />
  </Stack.Navigator>
);
