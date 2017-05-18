import React, { Component } from "react";
import {
  ActionSheetIOS,
  Alert,
  AsyncStorage,
  ActivityIndicator,
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
import ImagePicker from 'react-native-image-picker';

import APIClient from '../service/api-client';
import APIInterface from '../service/api-interface';
import APIConstant from '../service/api-constant';
import StorageConstant from '../service/storage-constant';

const choosePictureOption = [
  '拍照',
  '从手机相册选择',
  '取消'
]
const CHOOSE_PICTURE_OPTION_CANCEL_INDEX = 2

const options = {
  mediaType: 'photo', // 'photo' or 'video'
  videoQuality: 'high', // 'low', 'medium', or 'high'
  durationLimit: 10, // video recording max time in seconds
  maxWidth: 100, // photos only默认为手机屏幕的宽，高与宽一样，为正方形照片
  maxHeight: 100, // photos only
  allowsEditing: true, // 当用户选择过照片之后是否允许再次编辑图片
};

export default class RegisterTwoPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      indicating: false,
      nameValidate: false,
      maleChecked: false,
      femaleChecked: false,
      nextEnable: false,

      // 用来显示到avatar的state变量
      avatar: "",
      // 用来存储上传成功后的文件名
      data: "",
      name: ""
    }
  }

  back() {
    Actions.popTo('login')
  }

  choosePicture() {
    ActionSheetIOS.showActionSheetWithOptions({
      options: choosePictureOption,
      cancelButtonIndex: CHOOSE_PICTURE_OPTION_CANCEL_INDEX
    },
    (buttonIndex) => {
      switch (buttonIndex) {
        case 0:
          ImagePicker.launchCamera(options, (response) => {

          });
          break;
        case 1:
          ImagePicker.launchImageLibrary(options, (response) => {
            if(response.didCancel) {
              return
            }
            // 获取存储的登陆token
            copy = this
            copy.setState({ indicating: true})
            AsyncStorage.getItem(StorageConstant.TOKEN, function(error, result) {
              copy.setState({ indicating: false})

              if (error) {
                console.log(error);
              }
              if (!error) {
                // 上传文件
                copy.setState({ indicating: true})
                APIClient.access(APIInterface.upload(result, response.fileName, response.data))
                  .then((response) => {
                    copy.setState({ indicating: false})
                    return response.json()
                  })
                  .then((json) => {
                    console.log(json)
                    if(json.callStatus == APIConstant.STATUS_SUCCEED) {
                      copy.setState({
                        avatar: response.data,
                        data: json.data
                      })
                    } else {
                      Alert.alert('', json.errorCode)
                    }
                  })
                  .catch((error) => {
                    copy.setState({ indicating: false})
                    console.log(error)
                  })
              }
            });
          });
          break;
      }
    })
  }

  nameOnChange(text) {
    if(text.length == 0){
      this.setState({ nameValidate: false }, () => { this.checkNext() })
    } else {
      this.setState({ nameValidate: true }, () => { this.checkNext() })
    }
    this.setState({
      name: text
    })
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

  checkNext() {
    if(this.state.nameValidate) {
      this.setState({ nextEnable: true })
    } else {
      this.setState({ nextEnable: false })
    }
  }

  next() {
    if(this.state.nextEnable) {
      // 获取存储的登陆token
      copy = this
      copy.setState({ indicating: true})
      AsyncStorage.getItem(StorageConstant.TOKEN, function(error, result) {
        copy.setState({ indicating: false})

        if (error) {
          console.log(error);
        }
        if (!error) {
          // 完善个人信息
          copy.setState({ indicating: true})
          var body = {
            'realname': copy.state.name,
            'pic': copy.state.data,
            'friends': "",
            'sex': copy.state.maleChecked ? 'M' : 'F'
          }
          APIClient.access(APIInterface.updateUser(result, body))
            .then((response) => {
              copy.setState({ indicating: false})
              return response.json()
            })
            .then((json) => {
              console.log(json)
              if(json.callStatus == APIConstant.STATUS_SUCCEED) {
                Actions.popTo('login')
              } else {
                Alert.alert('', json.errorCode)
              }
            })
            .catch((error) => {
              copy.setState({ indicating: false})
              console.log(error)
            })
        }
      })
    }
  }

  render() {
    var avatar = (this.state.avatar == "") ? require('../resource/upload-avatar.png') : { uri: "data:image/jpg;base64," + this.state.avatar }

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
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <TouchableWithoutFeedback
              onPress={this.choosePicture.bind(this)}>
              <Image
                source={ avatar }
                style={{
                  width: 75,
                  height: 75,
                  marginTop: 30,
                  alignSelf: 'center',
                  backgroundColor: 'rgba(0, 0, 0, 0)',
                  borderRadius: 37.5
                }}/>
            </TouchableWithoutFeedback>
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
                  onChangeText = { this.nameOnChange.bind(this) }
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
