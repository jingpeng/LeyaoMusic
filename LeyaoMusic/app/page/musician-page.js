import React, { Component } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import {
  Actions
} from 'react-native-router-flux';

export default class MusicianPage extends Component {

  back() {
      Actions.pop()
  }

  render() {
    return (
      <ScrollView
        style={{
          height: Dimensions.get('window').height,
          flex: 1
        }}>
        <Image
          source={ require('../resource/about-2.jpg') }
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').width * 2.2333,
            backgroundColor: 'rgba(0, 0, 0, 0)',
          }}>
        </Image>
      </ScrollView>
    )
  }
}
