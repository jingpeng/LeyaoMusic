import React, { Component } from "react";
import {
  Dimensions,
  Image,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import {
  Actions
} from 'react-native-router-flux';

export default class StaveIntroductionPage extends Component {

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
              }}>五线谱介绍，谱号，加线</Text>
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
        <View
          style={{
            width: Dimensions.get('window').width - 60,
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
              }}>五线谱的功能是用来记录音符的。</Text>
          </View>
          <Image
            source={ require('../resource/stave-1.png') }
            style={{
              width: 244,
              height: 20.5,
              marginTop: 11,
              alignSelf: 'center'
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
              }}>现代的五线谱包括五条直线和线之间的四个间。</Text>
          </View>
          <Image
            source={ require('../resource/stave-2.png') }
            style={{
              width: 251,
              height: 22,
              marginTop: 7,
              marginLeft: -7,
              alignSelf: 'center'
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
              }}>五线谱的每线或每间的音符在键盘上都表示一个</Text>
          </View>
          <Text
            style={{
              fontFamily: 'ArialMT',
              fontSize: 13,
              marginLeft: 32,
              marginTop: 4,
              color: '#ffffff'
            }}>白键。</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}>
            <Image
              source={ require('../resource/stave-3.png') }
              style={{
                width: 95.5,
                height: 20.5,
                alignSelf: 'center',
                marginLeft: 36,
                marginTop: -8
              }}/>
            <Image
              source={ require('../resource/stave-4.png') }
              style={{
                width: 117,
                height: 52,
                alignSelf: 'center',
                marginRight: 36,
                marginTop: -8
              }}/>
          </View>
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
              }}>谱号分配给每个音符在某线或某间。</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 3
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
              }}>两个谱号通常分为：高音谱号和低音谱号。</Text>
          </View>
          <Image
            source={ require('../resource/stave-5.png') }
            style={{
              width: 244,
              height: 37.5,
              alignSelf: 'center',
              marginTop: 12,
            }}/>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 3,
            }}>
            <Text
              style={{
                fontFamily: 'ArialMT',
                fontSize: 13,
                marginLeft: 65,
                color: '#ffffff'
              }}>高音谱号</Text>
            <Text
              style={{
                fontFamily: 'ArialMT',
                fontSize: 13,
                marginLeft: 37,
                color: '#ffffff'
              }}>低音谱号</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 14
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
              }}>首先，我们将讨论高音谱号（也称为G谱号）</Text>
          </View>
          <Image
            source={ require('../resource/stave-6.png') }
            style={{
              width: 244,
              height: 37.5,
              marginTop: 9,
              alignSelf: 'center'
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
              }}>高音谱号环绕在五线谱上（蓝色显示）被称为G，</Text>
          </View>
          <Text
            style={{
              fontFamily: 'ArialMT',
              fontSize: 13,
              marginLeft: 32,
              marginTop: 4,
              color: '#ffffff'
            }}>放在该线的任何音符均为G。</Text>
          <Image
            source={ require('../resource/stave-7.png') }
            style={{
              width: 244,
              height: 48,
              marginTop: 9,
              alignSelf: 'center'
            }}/>
        </View>
      </Image>
    );
  }
}
