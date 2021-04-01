import {useCallback} from 'react';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {BackHandler, ToastAndroid} from 'react-native';

export const useExitApp = (): void => {
  const navigation = useNavigation();
  const route = useRoute();

  const onBackPress = useCallback((): boolean => {
    ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
    console.log('======useExitApp======');
    console.log('====================================');
    console.log(navigation);
    console.log(route);
    console.log(Date.now());
    console.log('====================================');

    return true;
  }, [navigation, route]);

  useFocusEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', onBackPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    };
  });
};
