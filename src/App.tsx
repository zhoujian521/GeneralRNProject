import React, { useRef } from 'react';
import { NavigationContainerRef } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import 'react-native-gesture-handler';
import { RootNavigator } from './navigators/RootNavigator';
import { RootSiblingParent } from 'react-native-root-siblings';

const App = () => {
  const navigationRef = useRef<NavigationContainerRef>();
  return (
    <SafeAreaProvider>
      <RootSiblingParent>
        <RootNavigator ref={navigationRef as any} />
      </RootSiblingParent>
    </SafeAreaProvider>
  );
};

export default App;
