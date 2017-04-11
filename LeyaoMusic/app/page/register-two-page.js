import React, { Component } from "react";
import {
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

export default class RegisterTwoPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      maleChecked: false,
      femaleChecked: false,
      nextEnable: true
    }
  }

  back() {
    Actions.pop()
  }

  checkMale() {
    if(!this.state.maleChecked) {
      this.setState({
        femaleChecked: false
      })
    }
    this.setState({
      maleChecked: !this.state.maleChecked
    })
  }

  checkFemale() {
    if(!this.state.femaleChecked) {
      this.setState({
        maleChecked: false
      })
    }
    this.setState({
      femaleChecked: !this.state.femaleChecked
    })
  }

  next() {

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
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <Image
              source={ require('../resource/default-avatar.png') }
              style={{
                width: 75,
                height: 74.5,
                marginTop: 30,
                alignSelf: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0)',
              }}/>
            <View
              style={{
                width: 252,
                alignSelf: 'center'
              }}>
              <View
                style={{
                  marginTop: 35,
                  width: 252,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontFamily: 'ArialMT',
                    fontSize: 17,
                    color: '#ffffff'
                  }}>姓名</Text>
                <TextInput
                  style={{
                    width: 188,
                    fontFamily: 'ArialMT',
                    fontSize: 16,
                    color: '#ffffff',
                    marginTop: 3
                  }}
                  caretHidden={ false }
                  multiline={ false }
                  placeholder={ '请编辑' }
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
                  marginTop: 29,
                  width: 252,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontFamily: 'ArialMT',
                    fontSize: 17,
                    color: '#ffffff'
                  }}>性别</Text>
                <View
                  style={{
                    width: 188,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 2
                  }}>
                  <TouchableWithoutFeedback
                    onPress={ this.checkMale.bind(this) }>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={ this.state.maleChecked ? require('../resource/checked.png') : require('../resource/uncheck.png') }
                        style={{
                          width: 15,
                          height: 15
                        }}/>
                      <Image
                        source={ require('../resource/male.png') }
                        style={{
                          width: 13,
                          height: 22.5,
                          marginLeft: 5
                        }}/>
                    </View>
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback
                    onPress={ this.checkFemale.bind(this) }>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginLeft: 36
                      }}>
                      <Image
                        source={ this.state.femaleChecked ? require('../resource/checked.png') : require('../resource/uncheck.png') }
                        style={{
                          width: 15,
                          height: 15
                        }}/>
                      <Image
                        source={ require('../resource/female.png') }
                        style={{
                          width: 13,
                          height: 22.5,
                          marginLeft: 5
                        }}/>
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              </View>
              <View
                style={{
                  height: 1,
                  marginTop: 10,
                  backgroundColor: 'rgba(255, 255, 255, 0.8)'
                }}/>
              <View
                style={{
                  marginTop: 29,
                  width: 252,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontFamily: 'ArialMT',
                    fontSize: 17,
                    color: '#ffffff'
                  }}>邮箱</Text>
                <TextInput
                  style={{
                    width: 188,
                    fontFamily: 'ArialMT',
                    fontSize: 16,
                    color: '#ffffff',
                    marginTop: 3
                  }}
                  caretHidden={ false }
                  multiline={ false }
                  keyboardType={ 'email-address' }
                  placeholder={ '请编辑' }
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
          </View>
        </KeyboardAvoidingView>
      </Image>
    )
  }
}
