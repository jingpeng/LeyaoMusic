import React, { Component } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import {
  Actions
} from 'react-native-router-flux';

export default class NoteDurationPage extends Component {

  back() {
    Actions.pop()
  }

  render() {
    return (
      <Image
        source={ require('../resource/main-background.jpg') }
        style={{
          flex: 1,
          alignItems: 'center',
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
              }}>音符时值</Text>
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
        <ScrollView
          showsVerticalScrollIndicator={ false }>
          <View
            style={{
              width: Dimensions.get('window').width - 60,
              alignSelf: 'center',
              marginTop: 16
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center'
              }}>
              <Image
                source={ require('../resource/dot.png') }
                style={{
                  width: 12,
                  height: 12
                }}/>
              <Text
                style={{
                  fontFamily: 'ArialMT',
                  fontSize: 13,
                  marginLeft: 20,
                  color: '#ffffff'
                }}>一个音符演奏的时间长度被称为它的音符时值，</Text>
            </View>
            <Text
              style={{
                fontFamily: 'ArialMT',
                fontSize: 13,
                marginLeft: 32,
                marginTop: 4,
                color: '#ffffff'
              }}>它是由音符的类型决定的。</Text>
            <Image
              source={ require('../resource/note-duration-1.png') }
              style={{
                width: 240.5,
                height: 35,
                alignSelf: 'center',
                marginTop: 12
              }}/>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 16
              }}>
              <Image
                source={ require('../resource/dot.png') }
                style={{
                  width: 12,
                  height: 12
                }}/>
              <Text
                style={{
                  fontFamily: 'ArialMT',
                  fontSize: 13,
                  marginLeft: 20,
                  color: '#ffffff'
                }}>全音符在现代音乐中是最长的音符时值。</Text>
            </View>
            <Image
              source={ require('../resource/note-duration-2.png') }
              style={{
                width: 240.5,
                height: 35,
                alignSelf: 'center',
                marginTop: 12
              }}/>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 16
              }}>
              <Image
                source={ require('../resource/dot.png') }
                style={{
                  width: 12,
                  height: 12
                }}/>
              <Text
                style={{
                  fontFamily: 'ArialMT',
                  fontSize: 13,
                  marginLeft: 20,
                  color: '#ffffff'
                }}>二分音符具有全音符一半的时值。</Text>
            </View>
            <Image
              source={ require('../resource/note-duration-3.png') }
              style={{
                width: 240.5,
                height: 35,
                alignSelf: 'center',
                marginTop: 12
              }}/>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 16
              }}>
              <Image
                source={ require('../resource/dot.png') }
                style={{
                  width: 12,
                  height: 12
                }}/>
              <Text
                style={{
                  fontFamily: 'ArialMT',
                  fontSize: 13,
                  marginLeft: 20,
                  color: '#ffffff'
                }}>两个二分音符的时值相当于一个全音符的时值。</Text>
            </View>
            <Image
              source={ require('../resource/note-duration-4.png') }
              style={{
                width: 121,
                height: 60,
                alignSelf: 'center',
                marginTop: 12
              }}/>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 16
              }}>
              <Image
                source={ require('../resource/dot.png') }
                style={{
                  width: 12,
                  height: 12
                }}/>
              <Text
                style={{
                  fontFamily: 'ArialMT',
                  fontSize: 13,
                  marginLeft: 20,
                  color: '#ffffff'
                }}>一个音符演奏的时间长度被称为它的音符时值，</Text>
            </View>
            <Text
              style={{
                fontFamily: 'ArialMT',
                fontSize: 13,
                marginLeft: 32,
                marginTop: 4,
                color: '#ffffff'
              }}>它是由音符的类型决定的。</Text>
            <Image
              source={ require('../resource/note-duration-5.png') }
              style={{
                width: 240.5,
                height: 35,
                alignSelf: 'center',
                marginTop: 12
              }}/>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 16
              }}>
              <Image
                source={ require('../resource/dot.png') }
                style={{
                  width: 12,
                  height: 12
                }}/>
              <Text
                style={{
                  fontFamily: 'ArialMT',
                  fontSize: 13,
                  marginLeft: 20,
                  color: '#ffffff'
                }}>一个音符演奏的时间长度被称为它的音符时值，</Text>
            </View>
            <Text
              style={{
                fontFamily: 'ArialMT',
                fontSize: 13,
                marginLeft: 32,
                marginTop: 4,
                color: '#ffffff'
              }}>它是由音符的类型决定的。</Text>
            <Image
              source={ require('../resource/note-duration-6.png') }
              style={{
                width: 211.5,
                height: 113.5,
                alignSelf: 'center',
                marginTop: 12
              }}/>
          </View>
        </ScrollView>
      </Image>
    );
  }
}
