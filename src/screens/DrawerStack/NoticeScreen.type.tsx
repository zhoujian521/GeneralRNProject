import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {DrawerParamList} from '../../navigators/DrawerNavigator';

type NoticeScreenRouteProp = RouteProp<DrawerParamList, 'notice'>;
type NoticeScreenNavigationProp = StackNavigationProp<
  DrawerParamList,
  'notice'
>;

export type NoticeScreenProps = {
  route: NoticeScreenRouteProp;
  navigation: NoticeScreenNavigationProp;
};
