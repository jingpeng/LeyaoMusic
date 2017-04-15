import React, { Component } from "react";
import {
  Image
} from 'react-native';

export default class ProfilePage extends Component {

  render() {
    return (
      <Image
        source={ require('../resource/main-background.jpg') }
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          width: null,
          height: null,
          backgroundColor: 'rgba(0, 0, 0, 0)',
        }}>
      </Image>
    );
  }
}
