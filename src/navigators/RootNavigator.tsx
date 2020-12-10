import React from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {PrimaryNavigator} from './PrimaryNavigator';
import {ModalNavigator} from './ModalNavigator';
import {TabNavigator} from './TabNavigator';

export type RootParamList = {
  tabNavigator: undefined;
  primaryStack: undefined;
  modalStack: undefined;
};

const Stack = createStackNavigator<RootParamList>();

const RootStack = () => (
  <Stack.Navigator
    mode="modal"
    screenOptions={{headerShown: false, gestureEnabled: true}}>
    <Stack.Screen name="tabNavigator" component={TabNavigator} />
    <Stack.Screen name="primaryStack" component={PrimaryNavigator} />
    <Stack.Screen name="modalStack" component={ModalNavigator} />
  </Stack.Navigator>
);

export const RootNavigator = React.forwardRef<
  NavigationContainerRef,
  Partial<React.ComponentProps<typeof NavigationContainer>>
>((props, ref) => {
  return (
    <NavigationContainer {...props} ref={ref}>
      <RootStack />
    </NavigationContainer>
  );
});

RootNavigator.displayName = 'RootNavigator';
