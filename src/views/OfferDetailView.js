import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  View
} from 'react-native';
import {Actions} from 'react-native-router-flux'
import {Input, SelectArea, Cell} from '../components/UI'
import {RkButton, RkTheme} from 'react-native-ui-kitten';
RkTheme.setType('RkButton', 'danger',{
  backgroundColor:'#EB3D00',
  width:'100%'
})
RkTheme.setType('RkButton', 'faded', {
  content: {
    opacity: 0.9,
  }
});
export default class OfferDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.title,
      banner: this.props.banner,
      carNo: '000'
    }
  }
  _handlePress () {}
  render() {
    return (
      <KeyboardAvoidingView style={{flex:1,backgroundColor:'#f7f7f7'}} behavior="padding">
        <View style={{flex:1}}>
          <ScrollView>
            <View>
              <Image style={{height:200,width:Dimensions.get('window').width}} source={{uri: this.state.banner}}/>
              <Cell title="投保城市" titleColor="#2b2b2b" valueColor="#2b2b2b" value="请输入车牌号" onPress={()=>{this._showPop.bind(this)}}></Cell>
              <SelectArea></SelectArea>
              <View style={{padding:10}}>
                <Text>推广费：商业险保费*10%+交强险保费*30%（分享页面推广费不可见）</Text>
              </View>
              <Input title="车牌号码" value='' titleColor="#2b2b2b" valueColor="#2b2b2b" placeholder="请输入车牌号" readonly={false} type="numeric" max={8} password={true} align="right"></Input>
              <Input title="车主姓名" value='' titleColor="#2b2b2b" valueColor="#2b2b2b" placeholder="请填写车主姓名" readonly={false} type="default" max={8} align="right"></Input>
              <Input title="手机号" value='' titleColor="#2b2b2b" valueColor="#2b2b2b" placeholder="请填写真实手机号" readonly={false} type="numeric" max={8} password={true} align="right"></Input>
            </View>
          </ScrollView>
        </View>
        <View style={{height:80,paddingLeft:10,paddingRight:10}}>
          <RkButton rkType="danger">下一步</RkButton>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F7F7F7',
    flexDirection: 'column'
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
  }
});
