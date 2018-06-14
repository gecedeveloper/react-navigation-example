import { createStackNavigator } from 'react-navigation';
import WelcomeComponent from '../components/Welcome'
import WizardComponent from '../components/Wizard'

export default createStackNavigator({
  Welcome: WelcomeComponent,
  Wizard: WizardComponent,
}, {
  initialRouteName: 'Welcome',
  headerMode: 'none',
});
