import React, { Component } from "react";
import {
  AsyncStorage,
  Dimensions,
  Image,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import {
  Actions,
  ActionConst
} from 'react-native-router-flux';

import StorageConstant from '../service/storage-constant';

export default class ProfilePage extends Component {

  logout() {
    // 存储登陆token
    AsyncStorage.removeItem(StorageConstant.TOKEN, function(error) {
      if (error) {
        console.log(error)
      }
      if (!error) {
        Actions.login({ type: ActionConst.REPLACE })
      }
    });
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
            }}>个人资料</Text>
        </View>
        <View
          style={{
            width: Dimensions.get('window').width,
            height: 59,
            marginTop: 10,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center'
          }}>
          <Text
            style={{
              fontFamily: 'ArialMT',
              fontSize: 13,
              color: '#ffffff',
              marginLeft: 11
            }}>头像</Text>
          <Image
            source={ require('../resource/default-avatar.png') }
            style={{
              width: 42,
              height: 42,
              marginRight: 11
            }}/>
        </View>
        <View
          style={{
            width: Dimensions.get('window').width,
            height: 43,
            marginTop: 5,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center'
          }}>
          <Text
            style={{
              fontFamily: 'ArialMT',
              fontSize: 13,
              color: '#ffffff',
              marginLeft: 11
            }}>姓名</Text>
          <Text
            style={{
              fontFamily: 'ArialMT',
              fontSize: 13,
              color: '#ffffff',
              marginRight: 11
            }}>乐瑶音乐</Text>
        </View>
        <View
          style={{
            width: Dimensions.get('window').width,
            height: 1,
            justifyContent: 'space-between',
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          }}>
          <View
            style={{
              width: Dimensions.get('window').width - 22,
              height: 1,
              alignSelf: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.1)'
            }}/>
        </View>
        <View
          style={{
            width: Dimensions.get('window').width,
            height: 43,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center'
          }}>
          <Text
            style={{
              fontFamily: 'ArialMT',
              fontSize: 13,
              color: '#ffffff',
              marginLeft: 11
            }}>性别</Text>
          <Text
            style={{
              fontFamily: 'ArialMT',
              fontSize: 13,
              color: '#ffffff',
              marginRight: 11
            }}>男</Text>
        </View>
        <View
          style={{
            width: Dimensions.get('window').width,
            height: 43,
            marginTop: 5,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center'
          }}>
          <Text
            style={{
              fontFamily: 'ArialMT',
              fontSize: 13,
              color: '#ffffff',
              marginLeft: 11
            }}>手机号</Text>
          <Text
            style={{
              fontFamily: 'ArialMT',
              fontSize: 13,
              color: '#ffffff',
              marginRight: 11
            }}>18611202198</Text>
        </View>
        <View
          style={{
            width: Dimensions.get('window').width,
            height: 1,
            justifyContent: 'space-between',
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          }}>
          <View
            style={{
              width: Dimensions.get('window').width - 22,
              height: 1,
              alignSelf: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.1)'
            }}/>
        </View>
        <View
          style={{
            width: Dimensions.get('window').width,
            height: 43,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center'
          }}>
          <Text
            style={{
              fontFamily: 'ArialMT',
              fontSize: 13,
              color: '#ffffff',
              marginLeft: 11
            }}>个人邮箱</Text>
          <Text
            style={{
              fontFamily: 'ArialMT',
              fontSize: 13,
              color: '#ffffff',
              marginRight: 11
            }}>42166663@qq.com</Text>
        </View>
        <TouchableWithoutFeedback
          onPress={ this.logout.bind(this) }>
          <View
            style={{
              width: Dimensions.get('window').width - 125,
              height: 43,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              marginTop: 40,
              borderRadius: 21
            }}>
            <Text
              style={{
                fontFamily: 'ArialMT',
                fontSize: 15,
                color: '#ffffff'
              }}>退出登录</Text>
          </View>
        </TouchableWithoutFeedback>
      </Image>
    );
  }
}
