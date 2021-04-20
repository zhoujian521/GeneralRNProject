import * as React from 'react';
import { createStackNavigator, StackHeaderTitleProps } from '@react-navigation/stack';

import OneScreen from '../screens/HomeStack/One/OneScreen';
import TwoScreen from '../screens/HomeStack/Two/TwoScreen';

import { Text, Button } from 'react-native';

const renderTitle = (props: StackHeaderTitleProps) => {
  console.log('renderTitle ==>', props);
  return <Text>自定义title</Text>;
};

const renderBtn = () => (
  <Button
    // eslint-disable-next-line no-alert
    onPress={() => alert('This is a button!')}
    title="Info"
    color="#fff"
  />
);

export type HomeParamList = {
  one: undefined;
  two: undefined;
};

const Stack = createStackNavigator<HomeParamList>();

export const HomeNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: true,
      gestureEnabled: true,
      headerStyle: { backgroundColor: '#f4511e' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' },
    }}>
    <Stack.Screen name="one" component={OneScreen} />
    <Stack.Screen
      name="two"
      component={TwoScreen}
      options={{
        title: 'My home',
        headerStyle: { backgroundColor: '#666666' },
        headerTitle: (props) => renderTitle(props),
        headerRight: () => renderBtn(),
      }}
    />
  </Stack.Navigator>
);

const exitRoutes = ['one'];
export const canExit = (routeName: string) => exitRoutes.includes(routeName);
