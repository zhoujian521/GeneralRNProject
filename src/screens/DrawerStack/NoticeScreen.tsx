import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { NoticeScreenProps } from './NoticeScreen.type';
import { SafeAreaView } from 'react-native-safe-area-context';

const NoticeScreen = ({ navigation }: NoticeScreenProps | any) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>This is top text.</Text>
      <View>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
        <Button onPress={() => navigation.openDrawer()} title="openDrawer" />
        <Button onPress={() => navigation.closeDrawer()} title="closeDrawer" />
        <Button onPress={() => navigation.toggleDrawer()} title="toggleDrawer" />
      </View>

      <Text>This is bottom text.</Text>
    </SafeAreaView>
  );
};

export default NoticeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'cyan',
  },
});
