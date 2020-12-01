/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'cyan',
    flex: 1,
  },
});

export default App;
