import React, {useRef} from 'react';
import {NavigationContainerRef} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import 'react-native-gesture-handler';
import {RootNavigator} from './navigators/RootNavigator';

const App = () => {
  const navigationRef = useRef<NavigationContainerRef>();
  return (
    <SafeAreaProvider>
      <RootNavigator ref={navigationRef as any} />
    </SafeAreaProvider>
  );
};

export default App;
