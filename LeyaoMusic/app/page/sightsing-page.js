import React, { Component } from "react";
import {
  Dimensions,
  Image,
  Text,
  View
} from 'react-native';

export default class SightsingPage extends Component {

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
            }}>视唱</Text>
        </View>
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
            }}>五线谱介绍，谱号，加线</Text>
        </View>
        <Image
          source={ require('../resource/sightsing-divider.png') }
          style={{
            width: Dimensions.get('window').width,
            height: 1,
            marginTop: 11,
            marginLeft: 11
          }}/>
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
            }}>音符时值（持续时间长短）</Text>
        </View>
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