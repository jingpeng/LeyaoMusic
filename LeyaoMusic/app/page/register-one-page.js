import React, { Component } from "react";
import {
  ActivityIndicator,
  Alert,
  AsyncStorage,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import {
  Actions
} from 'react-native-router-flux';
import CryptoJS from 'crypto-js';

import APIClient from '../service/api-client';
import APIInterface from '../service/api-interface';
import APIConstant from '../service/api-constant';
import StorageConstant from '../service/storage-constant';

export default class RegisterOnePage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      indicating: false,
      nextEnable: false,
      verifyEnable: true,

      phoneValidate: false,
      verifyValidate: false,
      passwordValidate: false,
      confirmPasswordValidate: false,

      phone: '',
      password: '',
      code: '',
      confirmPassword: ''
    }
    this.validateParam.bind(this)
    this.checkNext.bind(this)
    this.next.bind(this)
  }

  back() {
    Actions.pop()
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

  verifyOnChange(text) {
    if(text.length == 0){
      this.setState({ verifyValidate: false }, () => { this.checkNext() })
    } else {
      this.setState({ verifyValidate: true }, () => { this.checkNext() })
    }
    this.setState({
      code: text
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

  confirmPasswordOnChange(text) {
    if(text.length == 0){
      this.setState({ confirmPasswordValidate: false }, () => { this.checkNext() })
    } else {
      this.setState({ confirmPasswordValidate: true }, () => { this.checkNext() })
    }
    this.setState({
      confirmPassword: text
    })
  }

  checkNext() {
    if(this.state.phoneValidate &&
      this.state.verifyValidate &&
      this.state.passwordValidate &&
      this.state.confirmPasswordValidate) {
      this.setState({ nextEnable: true })
    } else {
      this.setState({ nextEnable: false })
    }
  }

  verify() {
    this.setState({ indicating: true})
    APIClient.access(APIInterface.getVerifyCode(this.state.phone))
      .then((response) => {
        this.setState({ indicating: false})
        return response.json()
      })
      .then((json) => {
        console.log(json)
        if(json.callStatus == APIConstant.STATUS_SUCCEED) {
          // alert(json.errorCode)
          Alert.alert('', '验证码已发送')
        } else {
          Alert.alert('', json.errorCode)
        }
      })
      .catch((error) => {
        this.setState({ indicating: false})
        console.log(error)
      })
  }

  validateParam() {
    // 目前只校验密码一致性
    if(this.state.password != this.state.confirmPassword) {
      Alert.alert('', '密码不一致')
      return false
    }

    return true
  }

  next() {
    if(this.state.nextEnable) {
      // 进行UI参数校验
      if(!this.validateParam()) {
        return
      }

      // 进行注册操作
      this.setState({ indicating: true})
      APIClient.access(APIInterface.register(this.state.phone, CryptoJS.MD5(this.state.password, { asString: true }).toString(), this.state.code))
        .then((response) => {
          this.setState({ indicating: false})
          return response.json()
        })
        .then((json) => {
          console.log(json)
          if(json.callStatus == APIConstant.STATUS_SUCCEED) {

            // 进行登陆操作
            this.setState({ indicating: true})
            APIClient.access(APIInterface.login(this.state.phone, this.state.password))
              .then((response) => {
                this.setState({ indicating: false})
                return response.json()
              })
              .then((json) => {
                console.log(json)
                if(json.callStatus == APIConstant.STATUS_SUCCEED) {
                  // 存储登陆token
                  copy = this
                  copy.setState({ indicating: true})
                  AsyncStorage.setItem(StorageConstant.TOKEN, json.token, function(error) {
                    copy.setState({ indicating: false})
                    if (error) {
                      console.log(error)
                    }
                    if (!error) {
                      Actions.register_two()
                    }
                  });

                } else {
                  Alert.alert('', json.errorCode)
                }
              })
              .catch((error) => {
                this.setState({ indicating: false})
                console.log(error);
              })
          } else {
            Alert.alert('', json.errorCode)
          }
        })
        .catch((error) => {
          this.setState({ indicating: false})
          console.log(error)
        })
    }
  }

  agreement() {

  }

  render() {
    return (
      <Image
        source={ require('../resource/pure-background.jpg') }
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
          width: null,
          height: null,
          backgroundColor: 'rgba(0, 0, 0, 0)',
        }}>
        <ActivityIndicator
          animating={ this.state.indicating }
          style={{
            position: 'absolute',
            top: (Dimensions.get('window').height - 80) / 2,
            height: 80
          }}
          size="large"/>
        <View
          style={{
            marginTop: 20,
            width: Dimensions.get('window').width,
            height: 44,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <Text
              style={{
                fontFamily: 'ArialMT',
                fontSize: 18,
                color: '#ffffff'
              }}>注册</Text>
          </View>
          <TouchableWithoutFeedback
            onPress={ this.back.bind(this) }>
            <View
              style={{
                position: 'absolute'
              }}>
              <Image
                source={ require('../resource/arrow.jpg') }
                style={{
                  width: 10,
                  height: 19.5,
                  marginLeft: 10
                }}/>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <KeyboardAvoidingView
          behavior={'padding'}
          style={{
            flex: 1
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <View
              style={{
                width: 252
              }}>
              <View
                style={{
                  width: 252,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontFamily: 'ArialMT',
                    fontSize: 17,
                    color: '#ffffff'
                  }}>手机号</Text>
                <TextInput
                  onChangeText = { this.phoneOnChange.bind(this) }
                  style={{
                    width: 160,
                    fontFamily: 'ArialMT',
                    fontSize: 16,
                    color: '#ffffff',
                    marginTop: 3
                  }}
                  caretHidden={ false }
                  multiline={ false }
                  keyboardType={ 'numeric' }
                  placeholder={ '请输入' }
                  placeholderTextColor={ 'rgba(255, 255, 255, 0.6)' }/>
              </View>
              <View
                style={{
                  height: 1,
                  marginTop: 10,
                  backgroundColor: 'rgba(255, 255, 255, 0.8)'
                }}/>
              <View
                style={{
                  marginTop: 26,
                  width: 252,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontFamily: 'ArialMT',
                    fontSize: 17,
                    color: '#ffffff'
                  }}>验证码</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: 160,
                    marginTop: -2
                  }}>
                  <TextInput
                    onChangeText = { this.verifyOnChange.bind(this) }
                    style={{
                      width: 96,
                      fontFamily: 'ArialMT',
                      fontSize: 16,
                      color: '#ffffff'
                    }}
                    caretHidden={ false }
                    multiline={ false }
                    keyboardType={ 'numeric' }
                    placeholder={ '请输入验证码' }
                    placeholderTextColor={ 'rgba(255, 255, 255, 0.6)' }/>
                  <TouchableWithoutFeedback
                    onPress={ this.verify.bind(this) }>
                    <View
                      style={{
                        width: 50,
                        height: 30,
                        backgroundColor: this.state.verifyEnable ? 'rgba(179, 214, 110, 1)' : 'rgba(225, 225, 225, 1)',
                        alignItems: 'center',
                        borderRadius: 5,
                        justifyContent: 'center'
                      }}>
                      <Text
                        style={{
                          fontFamily: 'ArialMT',
                          fontSize: 12,
                          color: this.state.verifyEnable ? '#ffffff' : '#333333'
                        }}>获取</Text>
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              </View>
              <View
                style={{
                  height: 1,
                  marginTop: 6,
                  backgroundColor: 'rgba(255, 255, 255, 0.8)'
                }}/>
              <View
                style={{
                  marginTop: 26,
                  width: 252,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontFamily: 'ArialMT',
                    fontSize: 17,
                    color: '#ffffff'
                  }}>密码</Text>
                <TextInput
                  onChangeText = { this.passwordOnChange.bind(this) }
                  style={{
                    width: 160,
                    fontFamily: 'ArialMT',
                    fontSize: 16,
                    color: '#ffffff',
                    marginTop: 3
                  }}
                  caretHidden={ false }
                  multiline={ false }
                  secureTextEntry={ true }
                  placeholder={ '请输入密码' }
                  placeholderTextColor={ 'rgba(255, 255, 255, 0.6)' }/>
              </View>
              <View
                style={{
                  height: 1,
                  marginTop: 10,
                  backgroundColor: 'rgba(255, 255, 255, 0.8)'
                }}/>
              <View
                style={{
                  marginTop: 26,
                  width: 252,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontFamily: 'ArialMT',
                    fontSize: 17,
                    color: '#ffffff'
                  }}>确认密码</Text>
                <TextInput
                  onChangeText = { this.confirmPasswordOnChange.bind(this) }
                  style={{
                    width: 160,
                    fontFamily: 'ArialMT',
                    fontSize: 16,
                    color: '#ffffff',
                    marginTop: 3
                  }}
                  caretHidden={ false }
                  multiline={ false }
                  secureTextEntry={ true }
                  placeholder={ '请输入密码' }
                  placeholderTextColor={ 'rgba(255, 255, 255, 0.6)' }/>
              </View>
              <View
                style={{
                  height: 1,
                  marginTop: 10,
                  backgroundColor: 'rgba(255, 255, 255, 0.8)'
                }}/>
            </View>
            <TouchableWithoutFeedback
              onPress={ this.next.bind(this) }>
              <View
                style={{
                  width: 290,
                  height: 40,
                  backgroundColor: this.state.nextEnable ? 'rgba(179, 214, 110, 1)' : 'rgba(225, 225, 225, 1)',
                  marginTop: 28,
                  alignItems: 'center',
                  borderRadius: 20,
                  justifyContent: 'center'
                }}>
                <Text
                  style={{
                    fontFamily: 'ArialMT',
                    fontSize: 17,
                    color: this.state.nextEnable ? '#ffffff' : '#333333'
                  }}>下一步</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={ this.agreement.bind(this) }>
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
                  }}>用户协议</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </KeyboardAvoidingView>
      </Image>
    )
  }
}
