import React, { useLayoutEffect, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, Button, StatusBar } from 'react-native';
import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native';
import { useExitApp } from '../../../hooks/useExitApp';
import UserApi from '../../../api/v1/user/UserApi';

import { connect } from 'react-redux';
import UserActions from '../../../store/UserRedux';

const OneScreen = (props: any) => {
  const { login } = props;
  const { userInfo } = props;
  const navigation = useNavigation();
  const route = useRoute();

  useExitApp();

  useLayoutEffect(() => {
    console.log('route ==>', route);
    navigation.setOptions({ headerTitle: '999', headerShown: false });
  }, [navigation, route]);

  useFocusEffect(() => {});

  useEffect(() => {
    console.log('==========userInfo==========================');
    console.log(userInfo);
    console.log('==========userInfo==========================');
  }, [userInfo]);

  const getVerifyCode = useCallback(async () => {
    const mobile = '18701641157';
    const data = await UserApi.getVerifyCode({ mobile });
    console.log('==========screen==========================');
    console.log(data);
    console.log('==========screen==========================');
  }, []);

  const doLogin = useCallback(async () => {
    const mobile = '18701641157';
    const code = '123456';
    login({ mobile, code });
    // const data = await UserApi.login(mobile, code);
  }, [login]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
      <Text>One Screen</Text>
      <Button title="Go to TwoScreen" onPress={() => navigation.navigate('two', { params: 111, sort: 222 })} />
      <Button title="Go to ModalScreen" onPress={() => navigation.navigate('modalStack')} />
      <Button title="getVerifyCode" onPress={() => getVerifyCode()} />
      <Button title="login" onPress={() => doLogin()} />
    </View>
  );
};

const mapStateToProps = (state: any) => {
  const {
    user: { userInfo },
  } = state;
  return { userInfo };
};

const mapDispatchToProps = (dispatch: any) => ({
  login: (params: any) => dispatch(UserActions.loginRequest(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OneScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dddddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
