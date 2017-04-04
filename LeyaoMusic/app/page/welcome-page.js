import React, { Component } from "react";
import {
  View,
  Text,
  Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class WelcomePage extends Component {

  componentDidMount() {
    setTimeout(() => {
      Actions.login()
    }, 3000)
  }

  render() {
    return (
      <Image
        source={require('../resource/welcome-background.jpg')}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          width: null,
          height: null,
          backgroundColor: 'rgba(0, 0, 0, 0)',
        }}>
        <View>
          <Text
            style={{
              fontFamily: 'ArialMT',
              fontSize: 26,
              color: '#ffffff',
              fontWeight: 'bold',
              alignSelf: 'center'
            }}>乐瑶音乐</Text>
          <Text
            style={{
              fontFamily: 'PingFang SC',
              fontSize: 17.5,
              color: '#ffffff',
              alignSelf: 'center',
              marginTop: 5
            }}>LEYAO MUSIC</Text>
        </View>
      </Image>
    );
  }
}
