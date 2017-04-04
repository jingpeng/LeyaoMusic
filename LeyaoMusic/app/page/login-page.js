import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableWithoutFeedback
} from 'react-native';

export default class LoginPage extends Component {

  constructor(props) {
    super(props)
    this.state = { loginEnable: true }
  }

  login() {
    if(!this.state.loginEnable){
      return
    } else {
      this.setState({
        loginEnable: !this.state.loginEnable
      })
    }
  }

  render() {
    return (
      <Image
        source={require('../resource/login-background.png')}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
          width: null,
          height: null,
          backgroundColor: 'rgba(0, 0, 0, 0)',
        }}>
        <View
          style={{
            justifyContent: 'center',
            flex: 1
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              style={{
                width: 21,
                height: 21
              }}
              source={require('../resource/welcome-background.jpg')}/>
            <TextInput
              style={{
                width: 186,
                marginLeft: 45,
                fontFamily: 'ArialMT',
                fontSize: 16,
                color: '#ffffff',
                marginTop: 3
              }}
              caretHidden={true}
              keyboardType={'numeric'}
              multiline={false}
              placeholder={'请输入'}
              placeholderTextColor={'#ffffff'}/>
          </View>
          <View
            style={{
              height: 0.5,
              marginTop: 10,
              backgroundColor: '#d0ffffff'
            }}/>
          <View
            style={{
              marginTop: 32,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              style={{
                width: 21,
                height: 21
              }}
              source={require('../resource/welcome-background.jpg')}/>
            <TextInput
              style={{
                width: 186,
                marginLeft: 45,
                fontFamily: 'ArialMT',
                fontSize: 16,
                color: '#ffffff',
                marginTop: 3
              }}
              secureTextEntry={true}
              caretHidden={true}
              multiline={false}
              placeholder={'请输入'}
              placeholderTextColor={'#ffffff'}/>
          </View>
          <View
            style={{
              height: 0.5,
              marginTop: 10,
              backgroundColor: 'rgba(255, 255, 255, 0.8)'
            }}/>
          <TouchableWithoutFeedback
            onPress={this.login.bind(this)}>
            <View
              style={{
                width: 290,
                height: 40,
                backgroundColor: this.state.loginEnable ? 'rgba(179, 214, 110, 0.6)' : 'rgba(204, 204, 204, 0.6)',
                marginTop: 69,
                alignItems: 'center',
                borderRadius: 20,
                justifyContent: 'center'
              }}>
              <Text
                style={{
                  fontFamily: 'ArialMT',
                  fontSize: 17,
                  color: this.state.loginEnable ? '#ffffff' : '#333333'
                }}>登录</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <View
              style={{
                marginTop: 13,
                alignItems: 'center'
              }}>
              <Text
                style={{
                  fontFamily: 'ArialMT',
                  fontSize: 14,
                  color: '#ffffff'
                }}>忘记密码</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <TouchableWithoutFeedback>
          <View
            style={{
              marginBottom: 22,
              alignItems: 'center'
            }}>
            <Text
              style={{
                fontFamily: 'ArialMT',
                fontSize: 14,
                color: '#ffffff'
              }}>注册</Text>
          </View>
        </TouchableWithoutFeedback>
      </Image>
    );
  }
}
