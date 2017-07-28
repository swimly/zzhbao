import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableNativeFeedback,
  View
} from 'react-native';
import Modal from 'react-native-modalbox';
import {Actions} from 'react-native-router-flux'
import Qrcode from '../components/Qrcode'
import {Cell} from '../components/UI'
import Cord from '../components/Cord'
import {BoxShadow} from 'react-native-shadow'
import Button from 'react-native-button';
export default class Personer extends Component {
  constructor(props){
    super(props)
    this.state = {
      showQrcode: false,
      userInfo: {}
    }
    storage.load({
      key: 'loginState',
      autoSync: true,
      syncInBackground: true,
    }).then(ret => {
      if (ret) {
        this.setState({
          userInfo: ret
        })
      }
    })
  }
  _jump (url, data) {
    Actions[url]({data})
  }
  _onShowQrcode () {
    console.log(this)
    this.refs.qrcode.open()
  }
  render() {
    return (
      <View style={[styles.container]}>
        <View style={{flexDirection:'row',backgroundColor:'#EB3D00',paddingLeft:20,paddingBottom:50,paddingTop:20,flexWrap:'wrap'}}>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <Image style={{width:60,height:60,borderBottomLeftRadius:30,borderBottomRightRadius:30,borderTopLeftRadius:30,borderTopRightRadius:30,borderWidth:1,borderColor:'#fff'}} source={{uri: this.state.userInfo.headPic}}></Image>
          </View>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:18,color:'#fff',marginLeft:10}}>{this.state.userInfo.userName}</Text>
          </View>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity activeOpacity={0.8} onPress={this._onShowQrcode.bind(this)}>
              <Image style={{width:25,height:25,marginLeft:10}} source={require('../../assets/images/code.png')}></Image>
            </TouchableOpacity>
          </View>
        </View>
        <Cord style={{width:'90%',backgroundColor:'#fff',borderBottomLeftRadius:10,borderBottomRightRadius:10,borderTopLeftRadius:10,borderTopRightRadius:10,marginTop:-30,marginLeft:'5%',paddingTop:10,paddingBottom:10,flexDirection:'row'}}></Cord>
        <ScrollView style={{flex:1,marginTop:10}}>
          <View style={{paddingBottom:10,paddingLeft:20}}>
            <Text style={{fontSize:16,color:'#686868'}}>订单管理</Text>
          </View>
          <View style={{flexDirection:'row',backgroundColor:'#fff',marginBottom:10,borderColor:'#E9E9E9',borderTopWidth:.5,borderBottomWidth:.5}}>
            <View style={{flex:1,alignItems:'center',paddingTop:15,paddingBottom:15}}>
              <TouchableOpacity>
                <View style={{alignItems:'center'}}>
                  <Image style={{width:42,height:42,marginBottom:5}} source={require('../../assets/images/order1.png')}></Image>
                  <Text>待付款</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{width:.5,height:40,alignSelf:'center',backgroundColor:'#E0E0E0'}}></View>
            <View style={{flex:1,alignItems:'center',paddingTop:15,paddingBottom:15}}>
              <TouchableOpacity>
                <View style={{alignItems:'center'}}>
                  <Image style={{width:42,height:42,marginBottom:5}} source={require('../../assets/images/order2.png')}></Image>
                  <Text>待付款</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{width:.5,height:40,alignSelf:'center',backgroundColor:'#E0E0E0'}}></View>
            <View style={{flex:1,alignItems:'center',paddingTop:15,paddingBottom:15}}>
              <TouchableOpacity>
                <View style={{alignItems:'center'}}>
                  <Image style={{width:42,height:42,marginBottom:5}} source={require('../../assets/images/order3.png')}></Image>
                  <Text>待付款</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{paddingBottom:10,paddingLeft:20}}>
            <Text style={{fontSize:16,color:'#686868'}}>其他管理</Text>
          </View>
          <Cell onPress={this._jump.bind(this,'Wallet',{userId:this.state.userInfo.userId})} style={{height:55}} icon={require('../../assets/images/wallet.png')} title="我的钱包" titleColor="#2b2b2b" rightIcon={require('../../assets/images/right.png')}></Cell>
          <Cell onPress={this._jump.bind(this,'Exchange',{userId:this.state.userInfo.userId})} style={{height:55}} icon={require('../../assets/images/exchange.png')} title="兑换记录" titleColor="#2b2b2b" rightIcon={require('../../assets/images/right.png')}></Cell>
          <Button
            containerStyle={{padding:10, height:45, overflow:'hidden',width:'100%',justifyContent:'center',marginTop:10,backgroundColor:'#fff',borderColor:'#E9E9E9',borderTopWidth:.5,borderBottomWidth:.5}}
            style={{fontSize: 14, color: '#eb3d00'}}
            styleDisabled={{color: 'red'}}>
            退出/登录
          </Button>
        </ScrollView>
        <Modal style={[styles.modal, styles.modal3]} position={"center"} ref={"qrcode"} coverScreen isDisabled={this.state.showQrcode}>
          <TouchableOpacity activeOpacity={0.8} onPress={this._onShowQrcode.bind(this)} style={{position:'absolute',top:-100,right:-100,backgroundColor:'#f00'}}>
            <Image style={{width:25,height:25,marginLeft:10}} source={require('../../assets/images/close.png')}></Image>
          </TouchableOpacity>
          <Image style={{width:60,height:60,borderBottomLeftRadius:30,borderBottomRightRadius:30,borderTopLeftRadius:30,borderTopRightRadius:30,borderWidth:1,borderColor:'#fff',marginBottom:10}} source={{uri: this.state.userInfo.headPic}}></Image>
          <Text style={{color:'#414141',fontSize:14}}>{this.state.userInfo.userName}</Text>
          <Qrcode/>
          <Text style={{color:'#414141',fontSize:14}}>扫一扫二维码，联系我</Text>
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
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
  modal3: {
    height: 330,
    width: 250,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    flexDirection:'column',
    alignItems:'center',
    justifyContent: 'center'
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
