import * as React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Modal001Screen = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  useFocusEffect(() => {
    console.log('======focus======');
  });

  return (
    <View
      style={[
        styles.container,
        {paddingTop: insets.top, paddingBottom: insets.bottom},
      ]}>
      <Text>This is top text.</Text>
      <View>
        <Button title="goBack" onPress={() => navigation.goBack()} />
        <Button
          title="go to modal002"
          onPress={() => navigation.navigate('modal002')}
        />
      </View>
      <Text>This is bottom text.</Text>
    </View>
  );
};

export default Modal001Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#666666',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
