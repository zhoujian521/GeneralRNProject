import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {TabNavigator} from './TabNavigator';
import NoticeScreen from '../screens/DrawerStack/NoticeScreen';

export type DrawerParamList = {
  tab: undefined;
  notice: undefined;
};

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Drawer.Navigator initialRouteName="tab">
      <Drawer.Screen name="tab" component={TabNavigator} />
      <Drawer.Screen name="notice" component={NoticeScreen} />
    </Drawer.Navigator>
  );
}
