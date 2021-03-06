import React, { Component } from "react";
import {
  Dimensions,
  Image,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import {
  Actions
} from 'react-native-router-flux';

export default class EarTrainingPage extends Component {

  aboutLeyao() {
    Actions.about_leyao()
  }

  musician() {
    Actions.musician()
  }

  render() {
    return (
      <Image
        source={ require('../resource/main-background.jpg') }
        style={{
          flex: 1,
          width: null,
          height: null,
          backgroundColor: 'rgba(0, 0, 0, 0)',
        }}>
        <View
          style={{
            marginTop: 20,
            height: 44,
            alignSelf: 'center',
            justifyContent: 'center'
          }}>
          <Text
            style={{
              fontFamily: 'ArialMT',
              fontSize: 18,
              color: '#ffffff'
            }}>乐理</Text>
        </View>
        <TouchableWithoutFeedback
          onPress={ this.aboutLeyao.bind(this) }>
          <View
            style={{
              width: Dimensions.get('window').width,
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10
            }}>
            <Image
              source={ require('../resource/stave.png') }
              style={{
                width: 20.5,
                height: 14.5,
                marginLeft: 10
              }}/>
            <Text
              style={{
                fontFamily: 'ArialMT',
                fontSize: 13,
                color: '#ffffff',
                marginLeft: 15
              }}>关于乐谣</Text>
          </View>
        </TouchableWithoutFeedback>
        <Image
          source={ require('../resource/sightsing-divider.png') }
          style={{
            width: Dimensions.get('window').width,
            height: 1,
            marginTop: 11,
            marginLeft: 11
          }}/>
        <TouchableWithoutFeedback
          onPress={ this.musician.bind(this) }>
          <View
            style={{
              width: Dimensions.get('window').width,
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 14
            }}>
            <Image
              source={ require('../resource/note-duration.png') }
              style={{
                width: 18.5,
                height: 16,
                marginLeft: 10
              }}/>
            <Text
              style={{
                fontFamily: 'ArialMT',
                fontSize: 13,
                color: '#ffffff',
                marginLeft: 15
              }}>合作艺人专辑</Text>
          </View>
        </TouchableWithoutFeedback>
        <Image
          source={ require('../resource/sightsing-divider.png') }
          style={{
            width: Dimensions.get('window').width,
            height: 1,
            marginTop: 11,
            marginLeft: 11
          }}/>
      </Image>
    );
  }
}
