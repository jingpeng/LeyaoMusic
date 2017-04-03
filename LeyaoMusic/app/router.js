import React, { Component } from 'react';
import {
  Actions,
  Scene,
  Router
} from 'react-native-router-flux';

import WelcomePage from './page/welcome-page';

export default class AppRouter extends Component {
  render() {
    return (
      <Router scenes={ scenes }/>
    );
  }
}

const scenes = Actions.create(
  <Scene key="root">
    <Scene
      key="welcome"
      hideNavBar={ true }
      component={ WelcomePage }/>
  </Scene>
);
