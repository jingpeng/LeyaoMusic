import React, { Component } from "react";
import {
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

export default class UpdateNamePage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '123'
    }
  }

  back() {
    Actions.pop()
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
            }}>修改姓名</Text>
          <Text
            style={{
              fontFamily: 'ArialMT',
              fontSize: 16,
              color: '#b3d66e',
              marginRight: 10
            }}>保存</Text>
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
            onChangeText={ (value) => this.setState({ name: value }) }
            value={ this.state.name }/>
        </View>
      </Image>
    );
  }
}
