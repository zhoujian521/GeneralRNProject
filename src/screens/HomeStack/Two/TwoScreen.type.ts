import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeParamList} from '../../../navigators/HomeNavigator';

type TwoScreenRouteProp = RouteProp<HomeParamList, 'two'>;
type TwoScreenNavigationProp = StackNavigationProp<HomeParamList, 'two'>;

export type TwoScreenProps = {
  route: TwoScreenRouteProp;
  navigation: TwoScreenNavigationProp;
};
