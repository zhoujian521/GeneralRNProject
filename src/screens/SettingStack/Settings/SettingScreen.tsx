import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

const SettingScreen = () => {
  const navigation = useNavigation();

  useFocusEffect(() => {
    console.log('======focus======');
  });
  return (
    <View style={styles.container}>
      <Text>One Screen</Text>
      <Button title="Go to TwoScreen" onPress={() => navigation.navigate('two', { params: 111, sort: 222 })} />
      <Button title="Go to ModalScreen" onPress={() => navigation.navigate('modalStack')} />
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dddddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
