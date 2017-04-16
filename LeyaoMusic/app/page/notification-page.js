import React, { Component } from "react";
import {
  Dimensions,
  Image,
  ListView,
  RefreshControl,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import {
  Actions
} from 'react-native-router-flux';

export default class NotificationPage extends Component {

  constructor(props) {
    super(props)
    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    var initialData = ['row 1', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2']
    //initialData = []
    this.state = {
      dataSource: ds.cloneWithRows(initialData),
      refreshing: false,
      data: initialData
    }
  }

  back() {
    Actions.pop()
  }

  onRefresh() {
    this.setState({
      refreshing: true
    })
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
              }}>消息</Text>
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
        {
           ( this.state.data.length > 0) ? (
             <ListView
               dataSource={ this.state.dataSource }
               refreshControl={
                 <RefreshControl
                   refreshing={ this.state.refreshing }
                   onRefresh={this.onRefresh.bind(this)}
                   tintColor="#cccccc"
                   title="正在加载中..."
                   titleColor="#ffffff"
                   colors={ ['#cccccc', '#777777'] }/>
               }
               renderRow={ (rowData) =>
                 <View
                   style={{
                     width: Dimensions.get('window').width,
                     marginTop: 20,
                     flexDirection: 'row',
                     justifyContent: 'center'
                   }}>
                   <View
                     style={{
                       width: Dimensions.get('window').width - 46,
                       borderRadius: 5,
                       backgroundColor: 'rgba(0, 0, 0, 0.5)'
                     }}>
                     <Text
                       style={{
                         fontFamily: 'ArialMT',
                         fontSize: 15,
                         marginLeft: 35,
                         marginTop: 10,
                         color: '#ffffff'
                       }}>系统消息</Text>
                     <Text
                       style={{
                         fontFamily: 'ArialMT',
                         fontSize: 13,
                         marginLeft: 35,
                         marginRight: 35,
                         marginTop: 5,
                         marginBottom: 10,
                         color: 'rgba(255, 255, 255, 0.8)'
                       }}>系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息系统消息</Text>
                     <Text
                       style={{
                         position: 'absolute',
                         fontFamily: 'ArialMT',
                         fontSize: 10,
                         right: 10,
                         top: 10,
                         color: 'rgba(255, 255, 255, 0.6)'
                       }}>2017-3-4  13:00</Text>
                   </View>
                   <Image
                     source={ require('../resource/music-note-set.jpg') }
                     style={{
                       width: 27.5,
                       height: 37.5,
                       top: -10,
                       left: 18,
                       position: 'absolute'
                     }}/>
                 </View>
               }/>
           ) : (
              <View
                style={{
                  position: 'absolute',
                  height: Dimensions.get('window').height,
                  justifyContent: 'center'
                }}>
                <Image
                  source={ require('../resource/notification-empty-status.png') }
                  style={{
                   width: 116.5,
                   height: 163
                  }}/>
              </View>
           )
        }
      </Image>
    );
  }
}
