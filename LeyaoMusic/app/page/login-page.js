import React, { Component } from "react";
import {
  Alert,
  AsyncStorage,
  Image,
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback
} from 'react-native';
import {
  Actions,
  ActionConst
} from 'react-native-router-flux';

import APIClient from '../service/api-client';
import APIInterface from '../service/api-interface';
import APIConstant from '../service/api-constant';
import StorageConstant from '../service/storage-constant';

export default class LoginPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      phoneValidate: false,
      passwordValidate: false,
      loginEnable: false,

      phone: "",
      password: ""
    }
  }

  phoneOnChange(text) {
    if(text.length == 0){
      this.setState({ phoneValidate: false }, () => { this.checkNext() })
    } else {
      this.setState({ phoneValidate: true }, () => { this.checkNext() })
    }
    this.setState({
      phone: text
    })
  }

  passwordOnChange(text) {
    if(text.length == 0){
      this.setState({ passwordValidate: false }, () => { this.checkNext() })
    } else {
      this.setState({ passwordValidate: true }, () => { this.checkNext() })
    }
    this.setState({
      password: text
    })
  }

  checkNext() {
    if(this.state.phoneValidate &&
      this.state.passwordValidate) {
      this.setState({ loginEnable: true })
    } else {
      this.setState({ loginEnable: false })
    }
  }

  login() {
    if(!this.state.loginEnable){
      return
    } else {
      this.setState({
        loginEnable: !this.state.loginEnable
      })

      APIClient.access(APIInterface.login(this.state.phone, this.state.password))
        .then((response) => {
          return response.json()
        })
        .then((json) => {
          console.log(json)
          if(json.callStatus == APIConstant.STATUS_SUCCEED) {
            // 存储登陆token
            AsyncStorage.setItem(StorageConstant.TOKEN, json.token, function(error) {
              if (error) {
                console.log(error)
              }
              if (!error) {
                Actions.main({ type: ActionConst.POP_AND_REPLACE })
              }
            });

          } else {
            Alert.alert('', json.errorCode)
          }
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }

  setPassword() {
    Actions.set_password()
  }

  register() {
    Actions.register_one()
  }

  render() {
    return (
      <Image
        source={ require('../resource/login-background.jpg') }
        style={{
          flex: 1,
          alignItems: 'center',
          width: null,
          height: null,
          backgroundColor: 'rgba(0, 0, 0, 0)',
        }}>
        <KeyboardAvoidingView
          behavior={'padding'}
          style={{
            justifyContent: 'space-between',
            flex: 1
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
                source={ require('../resource/icon-phone.jpg') }/>
              <TextInput
                onChangeText = { this.phoneOnChange.bind(this) }
                style={{
                  width: 186,
                  marginLeft: 45,
                  fontFamily: 'ArialMT',
                  fontSize: 16,
                  color: '#ffffff',
                  marginTop: 3
                }}
                caretHidden={ false }
                keyboardType={ 'numeric' }
                multiline={ false }
                placeholder={ '请输入' }
                placeholderTextColor={ '#ffffff' }/>
            </View>
            <View
              style={{
                height: 1,
                marginTop: 10,
                backgroundColor: 'rgba(255, 255, 255, 0.8)'
              }}/>
            <View
              style={{
                marginTop: 32,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  width: 16,
                  height: 19.5,
                  marginLeft: 2.5
                }}
                source={ require('../resource/icon-password.jpg') }/>
              <TextInput
                onChangeText = { this.passwordOnChange.bind(this) }
                style={{
                  width: 186,
                  marginLeft: 48,
                  fontFamily: 'ArialMT',
                  fontSize: 16,
                  color: '#ffffff',
                  marginTop: 3
                }}
                secureTextEntry={ true }
                caretHidden={ false }
                multiline={ false }
                placeholder={ '请输入' }
                placeholderTextColor={ '#ffffff' }/>
            </View>
            <View
              style={{
                height: 1,
                marginTop: 10,
                backgroundColor: 'rgba(255, 255, 255, 0.8)'
              }}/>
            <TouchableWithoutFeedback
              onPress={ this.login.bind(this) }>
              <View
                style={{
                  width: 290,
                  height: 40,
                  backgroundColor: this.state.loginEnable ? 'rgba(179, 214, 110, 0.6)' : 'rgba(225, 225, 225, 0.6)',
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
            <TouchableWithoutFeedback
              onPress={ this.setPassword.bind(this) }>
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
          <TouchableWithoutFeedback
            onPress={ this.register.bind(this) }>
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
        </KeyboardAvoidingView>
      </Image>
    );
  }
}
