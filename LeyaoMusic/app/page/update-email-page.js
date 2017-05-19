import React, { Component } from "react";
import {
  ActivityIndicator,
  Alert,
  AsyncStorage,
  Dimensions,
  Image,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import {
  Actions
} from 'react-native-router-flux';

import APIClient from '../service/api-client';
import APIInterface from '../service/api-interface';
import APIConstant from '../service/api-constant';
import StorageConstant from '../service/storage-constant';

export default class UpdateEmailPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      indicating: false,
      email: props.email,
      parentComponent: props.parentComponent
    }
  }

  back() {
    Actions.pop()
  }

  save() {
    copy = this
    copy.setState({ indicating: true})
    AsyncStorage.getItem(StorageConstant.TOKEN, function(error, result) {
      copy.setState({ indicating: false})
      if (error) {
        console.log(error)
        return
      }
      if (!error) {
        if(result == null) {
        } else {
          console.log(result)

          var body = {
            'email': copy.state.email
          }
          copy.setState({ indicating: true})
          APIClient.access(APIInterface.updateUser(result, body))
            .then((response) => {
              copy.setState({ indicating: false})
              return response.json()
            })
            .then((json) => {
              console.log(json)
              if(json.callStatus == APIConstant.STATUS_SUCCEED) {
                Actions.pop()
                copy.state.parentComponent.load()
              } else {
                Alert.alert('', json.errorCode)
              }
            })
            .catch((error) => {
              copy.setState({ indicating: false})
              console.log(error)
            })
        }
      }
    })
  }

  render() {
    return (
      <Image
        source={ require('../resource/main-background.jpg') }
        style={{
          flex: 1,
          width: null,
          height: null,
          alignItems: 'center',
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
            width: Dimensions.get('window').width,
            marginTop: 20,
            height: 44,
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row'
          }}>
          <TouchableWithoutFeedback
            onPress={ this.back.bind(this) }>
            <View
              style={{
                marginLeft: 10
              }}>
              <Text
                style={{
                  fontFamily: 'ArialMT',
                  fontSize: 16,
                  color: '#ffffff'
                }}>取消</Text>
            </View>
          </TouchableWithoutFeedback>
          <Text
            style={{
              fontFamily: 'ArialMT',
              fontSize: 18,
              color: '#ffffff'
            }}>修改邮箱</Text>
          <TouchableWithoutFeedback
            onPress={ this.save.bind(this) }>
            <View
              style={{
                marginRight: 10
              }}>
              <Text
                style={{
                  fontFamily: 'ArialMT',
                  fontSize: 16,
                  color: '#b3d66e'
                }}>保存</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View
          style={{
            width: Dimensions.get('window').width,
            height: 50,
            marginTop: 5,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center'
          }}>
          <TextInput
            style={{
              fontFamily: 'ArialMT',
              fontSize: 13,
              width: Dimensions.get('window').width - 20,
              color: '#ffffff'
            }}
            onChangeText={ (value) => this.setState({ email: value }) }
            value={ this.state.email }/>
        </View>
      </Image>
    );
  }
}
