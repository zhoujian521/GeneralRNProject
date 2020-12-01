import React, {useRef} from 'react';
import {NavigationContainerRef} from '@react-navigation/native';

import 'react-native-gesture-handler';
import {RootNavigator} from './navigators/RootNavigator';

const App = () => {
  const navigationRef = useRef<NavigationContainerRef>();
  return <RootNavigator ref={navigationRef as any} />;
};

export default App;
