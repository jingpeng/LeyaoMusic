import React, { Component } from "react";
import {
  View,
  Text,
  Image
} from 'react-native';

export default class WelcomePage extends Component {
  render() {
    return (
      <Image
        source={require('../resource/welcome-background.jpg')}
        style={{
          flex:1,
          alignItems:'center',
          justifyContent:'center',
          width:null,
          width:null,
          backgroundColor:'rgba(0,0,0,0)',
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
