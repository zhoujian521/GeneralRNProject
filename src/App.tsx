import React, { useRef } from 'react';
import { NavigationContainerRef } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import 'react-native-gesture-handler';
import { RootNavigator } from './navigators/RootNavigator';
import { RootSiblingParent } from 'react-native-root-siblings';

import { Provider } from 'react-redux';
import createStore from './store';
export const store = createStore();

const App = () => {
  const navigationRef = useRef<NavigationContainerRef>();
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <RootSiblingParent>
          <RootNavigator ref={navigationRef as any} />
        </RootSiblingParent>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
