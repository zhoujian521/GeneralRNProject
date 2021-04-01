import React, {useLayoutEffect} from 'react';
import {View, Text, StyleSheet, Button, StatusBar} from 'react-native';
import {
  useNavigation,
  useRoute,
  useFocusEffect,
} from '@react-navigation/native';

import {useExitApp} from '../../../hooks/useExitApp';

const OneScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  useExitApp();

  useLayoutEffect(() => {
    console.log('route ==>', route);
    navigation.setOptions({headerTitle: '999', headerShown: false});
  }, [navigation, route]);

  useFocusEffect(() => {
    console.log('======focus======');
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
      <Text>One Screen</Text>
      <Button
        title="Go to TwoScreen"
        onPress={() => navigation.navigate('two', {params: 111, sort: 222})}
      />
      <Button
        title="Go to ModalScreen"
        onPress={() => navigation.navigate('modalStack')}
      />
    </View>
  );
};

export default OneScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dddddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
