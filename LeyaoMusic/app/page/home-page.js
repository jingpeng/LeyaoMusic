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

export default class HomePage extends Component {

  notification() {
    Actions.notification()
  }

  sightsing() {
    Actions.sightsing()
  }

  earTraining() {
    Actions.ear_training()
  }

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
        <TouchableWithoutFeedback
          onPress={ this.notification.bind(this) }>
          <Image
            source={ require('../resource/chat.png') }
            style={{
              position: 'absolute',
              width: 18.5,
              height: 18.5,
              right: 10,
              top: 32
            }}/>
        </TouchableWithoutFeedback>
        <Image
          source={ require('../resource/central-divider.png') }
          style={{
            position: 'absolute',
            width: 1,
            height: 140.5,
            top: 229
          }}/>
        <View
          style={{
            flex: 1
          }}>
          <Image
            source={ require('../resource/title.png') }
            style={{
              width: 58,
              height: 15.5,
              marginTop: 29,
              alignSelf: 'center'
            }}/>
        </View>
        <View
          style={{
            position: 'absolute',
            top: 246,
            flexDirection: 'row'
          }}>
          <TouchableWithoutFeedback
            onPress={ this.sightsing.bind(this) }>
            <View
              style={{
                width: Dimensions.get('window').width / 2
              }}>
              <Image
                source={ require('../resource/sightsing-large.png') }
                style={{
                  width: 62,
                  height: 62,
                  alignSelf: 'center'
                }}/>
              <Text
                style={{
                  fontFamily: 'ArialMT',
                  fontSize: 13,
                  color: '#ffffff',
                  alignSelf: 'center',
                  marginTop: 30
                }}>乐理</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={ this.earTraining.bind(this) }>
            <View
              style={{
                width: Dimensions.get('window').width / 2
              }}>
              <Image
                source={ require('../resource/headphone-large.png') }
                style={{
                  width: 62,
                  height: 62,
                  alignSelf: 'center'
                }}/>
              <Text
                style={{
                  fontFamily: 'ArialMT',
                  fontSize: 13,
                  color: '#ffffff',
                  alignSelf: 'center',
                  marginTop: 30
                }}>相关</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </Image>
    );
  }
}
