import React from 'react';
import { StatusBar, Platform } from 'react-native';
import { Root } from 'native-base';
import { Font , AppLoading } from 'expo';

import RootStack from './navigation'

// Hide StatusBar on Android as it overlaps tabs
if (Platform.OS === 'android') StatusBar.setHidden(true);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return(
        <AppLoading />
      );
    }
    return (
      <Root hideNavBar= 'true'>
        <RootStack />
      </Root>
    );
  }
}
