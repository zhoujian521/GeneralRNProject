import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {PrimaryParamList} from '../../../navigators/PrimaryNavigator';

type TwoScreenRouteProp = RouteProp<PrimaryParamList, 'two'>;
type TwoScreenNavigationProp = StackNavigationProp<PrimaryParamList, 'two'>;

export type TwoScreenProps = {
  route: TwoScreenRouteProp;
  navigation: TwoScreenNavigationProp;
};
