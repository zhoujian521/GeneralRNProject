import * as React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Modal002Screen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Modal002Screen</Text>
      <Button title="goBack" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Modal002Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dddddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
