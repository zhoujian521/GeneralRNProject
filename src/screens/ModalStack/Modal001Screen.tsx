import * as React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useNavigation, useFocusEffect} from '@react-navigation/native';

const Modal001Screen = () => {
  const navigation = useNavigation();

  useFocusEffect(() => {
    console.log('======focus======');
  });

  return (
    <View style={styles.container}>
      <Text>modal001</Text>
      <Button title="goBack" onPress={() => navigation.goBack()} />
      <Button
        title="go to modal002"
        onPress={() => navigation.navigate('modal002')}
      />
    </View>
  );
};

export default Modal001Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dddddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
