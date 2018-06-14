import { createStackNavigator } from 'react-navigation';
import StackNav from './StackNav';
import DrawerNav from './DrawerNav';

export default createStackNavigator({
  StackNav: StackNav,
  DrawerNav: DrawerNav,
}, {
  initialRouteName: 'StackNav',
  headerMode: 'none',
});
