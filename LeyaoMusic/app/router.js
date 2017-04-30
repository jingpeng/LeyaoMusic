import React, { Component } from 'react';
import {
  Actions,
  Scene,
  Reducer,
  Router
} from 'react-native-router-flux';

import WelcomePage from './page/welcome-page';
import GuidePage from './page/guide-page';
import LoginPage from './page/login-page';
import SetPasswordPage from './page/set-password-page';
import RegisterOnePage from './page/register-one-page';
import RegisterTwoPage from './page/register-two-page';
import HomePage from './page/home-page';
import SightsingPage from './page/sightsing-page';
import EarTrainingPage from './page/ear-training-page';
import ProfilePage from './page/profile-page';
import NotificationPage from './page/notification-page';
import StaveIntroductionPage from './page/stave-introduction-page';
import NoteDurationPage from './page/note-duration-page';

import TabIconWidget from './widget/tab-icon-widget'

export default class AppRouter extends Component {
  render() {
    return (
      <Router scenes={ scenes } createReducer={ reducerCreate }/>
    );
  }
}

const reducerCreate = params => {
  const defaultReducer = new Reducer(params)
  console.log('params:', params)
  return (state, action) => {
    console.log('action:', action)
    console.log('state:', state)
    return defaultReducer(state, action)
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
    <Scene
      key="register_two"
      hideNavBar={ true }
      component={ RegisterTwoPage }/>
    <Scene
      key="main"
      tabs={ true }>
      <Scene
        key="home"
        hideNavBar={ true }
        component={ HomePage }
        icon={ TabIconWidget }
        title="首页"
        selectedIcon={ require('./resource/music-note-selected.png') }
        unSelectedIcon={ require('./resource/music-note-unselected.png') }
        selectedColor='rgba(179, 214, 110, 1)'
        unSelectedColor='rgba(255, 255, 255, 1)'/>
      <Scene
        key="sightsing"
        hideNavBar={ true }
        component={ SightsingPage }
        icon={ TabIconWidget }
        title="视唱"
        selectedIcon={ require('./resource/sightsing-selected.png') }
        unSelectedIcon={ require('./resource/sightsing-unselected.png') }
        selectedColor='rgba(179, 214, 110, 1)'
        unSelectedColor='rgba(255, 255, 255, 1)'/>
      <Scene
        key="ear_training"
        hideNavBar={ true }
        component={ EarTrainingPage }
        icon={ TabIconWidget }
        title="练耳"
        selectedIcon={ require('./resource/headphone-selected.png') }
        unSelectedIcon={ require('./resource/headphone-unselected.png') }
        selectedColor='rgba(179, 214, 110, 1)'
        unSelectedColor='rgba(255, 255, 255, 1)'/>
      <Scene
        key="profile"
        hideNavBar={ true }
        component={ ProfilePage }
        icon={ TabIconWidget }
        title="个人"
        selectedIcon={ require('./resource/profile-selected.png') }
        unSelectedIcon={ require('./resource/profile-unselected.png') }
        selectedColor='#b3d66e'
        unSelectedColor='rgba(255, 255, 255, 1)'
        hideDivider={ true }/>
    </Scene>
    <Scene
      key="notification"
      hideNavBar={ true }
      component={ NotificationPage }/>
    <Scene
      key="stave_introduction"
      hideNavBar={ true }
      component={ StaveIntroductionPage }/>
    <Scene
      key="note_duration"
      hideNavBar={ true }
      component={ NoteDurationPage }/>
  </Scene>
);
