import React, { Component } from "react";
import {
  Image,
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';
import {
  Actions
} from 'react-native-router-flux';

export default class GuidePage extends Component {

  go() {
    Actions.login()
  }

  render() {
    return (
      <Image
        source={ require('../resource/guide-background.jpg') }
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-end',
          width: null,
          height: null,
          backgroundColor: 'rgba(0, 0, 0, 0)',
        }}>
        <TouchableWithoutFeedback
          onPress={ this.go.bind(this) }>
          <View
            style={{
              width: 150,
              height: 41,
              backgroundColor: 'rgba(179, 214, 110, 0.6)',
              marginBottom: 50,
              alignItems: 'center',
              borderRadius: 20,
              justifyContent: 'center'
            }}>
            <Text
              style={{
                fontFamily: 'ArialMT',
                fontSize: 17,
                color: '#ffffff'
              }}>登录/注册</Text>
          </View>
        </TouchableWithoutFeedback>
      </Image>
    )
  }
}
