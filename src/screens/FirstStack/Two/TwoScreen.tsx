import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {TwoScreenProps} from './TwoScreen.type';

// import {useNavigation, useRoute} from '@react-navigation/native';
// const navigation = useNavigation();
// const route = useRoute();

const TwoScreen = ({navigation, route}: TwoScreenProps) => {
  useEffect(() => {
    console.log('navigation ==>', navigation);
    console.log('route =======>', route.name, route.params);
  }, [navigation, route]);

  return (
    <View style={styles.container}>
      <Text>Two Screen</Text>
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({title: 'Updated!'})}
      />
    </View>
  );
};

export default TwoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dddddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
