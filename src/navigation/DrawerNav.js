import { createDrawerNavigator } from 'react-navigation-drawer';
import ProfileComponent from '../components/Profile'
import MainComponent from '../components/Main'

export default createDrawerNavigator({
  Main: MainComponent,
  Profile: ProfileComponent,
}, {
  initialRouteName: 'Main',
  contentOptions: {
    activeTintColor: '#e91e63',
  },
  headerMode: 'screen',
  navigationOptions: {
    header: {
      visible: 'true'
    }
  }
});
