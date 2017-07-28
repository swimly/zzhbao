import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';
import Cord from '../components/Cord'
import Echarts from 'native-echarts';
export default class WalletView extends Component {
  constructor(props){
    super(props)
    this.state = {
      userId: this.props.data.userId
    }
  }
  render() {
    const option = {
      series: [{
        name: '积分',
        type: 'pie',
        radius: '70%',
        center: ['50%', '50%'],
        data: [0, 10],
        minAngle: 10,
        itemStyle: {
          normal: {
            label: {
              show: false
            },
            labelLine: {
              show: false
            },
            borderWidth: 2,
            borderColor: 'rgba(255, 255, 255, 0.6)'
          }
        }
      }],
      color: ['#FDC800', '#43B5E4']
    };
    return (
      <ScrollView>
        <View style={{flexDirection:'row',backgroundColor:'#EB3D00',paddingLeft:20,paddingBottom:20,paddingTop:20,flexWrap:'wrap'}}>
          <Cord TextStyle={{color:'rgba(255,255,255,0.55)'}} numStyle={{color:'#fff'}} style={{flex:1,flexDirection:'row'}}></Cord>
        </View>
        <Echarts option={option} height={300} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
