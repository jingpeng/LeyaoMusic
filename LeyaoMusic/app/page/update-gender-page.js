import React, { Component } from "react";
import {
  ActivityIndicator,
  Alert,
  AsyncStorage,
  Dimensions,
  Image,
  Text,
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

export default class UpdateGenderPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      indicating: false,
      maleChecked: (props.gender == 'M') ? true : false,
      femaleChecked: (props.gender == 'F') ? true : false,
      sex: '',
      parentComponent: props.parentComponent
    }

    this.save.bind(this)
  }

  back() {
    Actions.pop()
  }

  maleCheck() {
    this.setState({
      maleChecked: true,
      femaleChecked: false,
      sex: 'M'
    })

    this.save()
  }

  femaleCheck() {
    this.setState({
      maleChecked: false,
      femaleChecked: true,
      sex: 'F'
    })

    this.save()
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
            'sex': copy.state.sex
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
              }}>修改性别</Text>
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
        <TouchableWithoutFeedback
          onPress={ this.maleCheck.bind(this) }>
          <View
            style={{
              width: Dimensions.get('window').width,
              height: 51,
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
                marginLeft: 10,
                color: '#ffffff'
              }}>男</Text>
            {
              this.state.maleChecked ? (
                <Image
                  source={ require('../resource/gender-selected.png') }
                  style={{
                    width: 15,
                    height: 10,
                    marginRight: 10,
                    backgroundColor: 'rgba(0, 0, 0, 0)'
                  }}/>
              ) : (
                null
              )
            }
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={ this.femaleCheck.bind(this) }>
          <View
            style={{
              width: Dimensions.get('window').width,
              height: 51,
              marginTop: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center'
            }}>
            <Text
              style={{
                fontFamily: 'ArialMT',
                fontSize: 13,
                marginLeft: 10,
                color: '#ffffff'
              }}>女</Text>
            {
              this.state.femaleChecked ? (
                <Image
                  source={ require('../resource/gender-selected.png') }
                  style={{
                    width: 15,
                    height: 10,
                    marginRight: 10,
                    backgroundColor: 'rgba(0, 0, 0, 0)'
                  }}/>
              ) : (
                null
              )
            }
          </View>
        </TouchableWithoutFeedback>
      </Image>
    );
  }
}
