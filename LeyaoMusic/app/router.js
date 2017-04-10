import React, { Component } from 'react';
import {
  Actions,
  Scene,
  Router
} from 'react-native-router-flux';

import WelcomePage from './page/welcome-page';
import GuidePage from './page/guide-page';
import LoginPage from './page/login-page';
import SetPasswordPage from './page/set-password-page';
import RegisterOnePage from './page/register-one-page';

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
    <Scene
      key="guide"
      hideNavBar={ true }
      component={ GuidePage }/>
    <Scene
      key="login"
      hideNavBar={ true }
      component={ LoginPage }/>
    <Scene
      key="set_password"
      hideNavBar={ true }
      component={ SetPasswordPage }/>
    <Scene
      key="register_one"
      hideNavBar={ true }
      component={ RegisterOnePage }/>
  </Scene>
);
