import React, { Component } from "react";
import {
  Alert,
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

import APIClient from '../service/api-client';
import APIInterface from '../service/api-interface';
import APIConstant from '../service/api-constant';
import StorageConstant from '../service/storage-constant';

export default class ProfilePage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      avatar: require('../resource/default-avatar.png'),
      realName: "未知",
      gender: "未知",
      userName: "未知",
      email: "未知"
    }
  }

  componentDidMount() {
    // 获取存储的登陆token
    copy = this
    AsyncStorage.getItem(StorageConstant.TOKEN, function(error, result) {
      if (error) {
        console.log(error)
        return
      }
      if (!error) {
        if(result == null) {
        } else {
          console.log(result)

          APIClient.access(APIInterface.details(result))
            .then((response) => {
              return response.json()
            })
            .then((json) => {
              console.log(json)
              if(json.callStatus == APIConstant.STATUS_SUCCEED) {
                copy.setState({
                  avatar: {uri: (APIConstant.BASE_FILE_URI + json.data.pic)},
                  realName: json.data.realname,
                  userName: json.data.username,
                })
              } else {
                Alert.alert('', json.errorCode)
              }
            })
            .catch((error) => {
              console.log(error);
            })
        }
      }
    })
  }

  logout() {
    // 存储登陆token
    AsyncStorage.removeItem(StorageConstant.TOKEN, function(error) {
      if (error) {
        console.log(error)
      }
      if (!error) {
        Actions.guide({ type: ActionConst.REPLACE })
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
            source={ this.state.avatar }
            style={{
              borderRadius: 21,
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
            }}>{ this.state.realName }</Text>
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
            }}>{ this.state.gender }</Text>
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
            }}>{ this.state.userName }</Text>
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
            }}>{ this.state.email }</Text>
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
