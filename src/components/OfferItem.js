import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';
import Ripple from 'react-native-material-ripple';
export default class OfferItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: this.props.data
    }
  }
  render() {
    var self = this
    const rec = this.state.data.isMarketing ? <Image style={{width:50,height:50}} source={require('../../assets/images/rec.png')}></Image> : ''
    return (
        <View style={[styles.offerItem]}>
          <View style={{flex:2,justifyContent:'center',padding:10}}>
            <Image style={{width:100,height:100,backgroundColor:'#fff'}} source={{uri:this.state.data.logo}}></Image>
          </View>
          <View style={{flex: 5,justifyContent:'center'}}>
            <Text style={[styles.offerTitle]}>{this.state.data.name}</Text>
            <Text style={[styles.offerText]}>承保地区：{this.state.data.insureArea}</Text>
            <Text style={[styles.offerText]}>承保车辆：{this.state.data.insureCar}</Text>
            <Text style={[styles.offerText, {color:'#eb3d00'}]}>最高推广费：30%</Text>
          </View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  offerItem: {
    flexDirection: 'row',
    borderBottomWidth:1,
    borderColor: '#F0F0F0'
  },
  offerTitle:{
    fontSize:16,
    color:'#0c0c0c',
    marginBottom:5
  },
  offerText: {
    fontSize:14,
    color:'#757575',
    lineHeight: 22
  }
});

