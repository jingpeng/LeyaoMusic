import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class TabIconWidget extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    const selected = this.props.selected;
    const textColor = selected ? this.props.selectedColor : this.props.unSelectedColor;
    const iconSource = selected ? this.props.selectedIcon : this.props.unSelectedIcon;
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row'
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            flexDirection: 'column'
          }}>
          <View>
            <Image
              source={ iconSource }
              style={{
                height: 22,
                width: 22,
              }}/>
          </View>
          <View
            style={{
              marginTop: 2
            }}>
            <Text
              style={{
                color: textColor,
                fontSize: 10
              }}>{this.props.title}</Text>
          </View>
        </View>
      </View>
    );
  }
}
