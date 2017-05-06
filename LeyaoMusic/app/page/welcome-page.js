import React, { Component } from "react";
import {
  AsyncStorage,
  View,
  Text,
  Image
} from 'react-native';
import {
  Actions,
  ActionConst
} from 'react-native-router-flux';
import StorageConstant from '../service/storage-constant';

export default class WelcomePage extends Component {

  componentDidMount() {
    setTimeout(() => {
      // 获取存储的登陆token
      copy = this
      AsyncStorage.getItem(StorageConstant.TOKEN, function(error, result) {
        if (error) {
          console.log(error);
          Actions.guide({ type: ActionConst.REPLACE })
        }
        if (!error) {
          if(result == null) {
            Actions.guide({ type: ActionConst.REPLACE })
          } else {
            console.log(result)
            Actions.main({ type: ActionConst.REPLACE })
          }
        }
      })
    }, 2000)
  }

  render() {
    return (
      <Image
        source={ require('../resource/welcome-background.jpg') }
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
            }}>乐谣音乐</Text>
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
