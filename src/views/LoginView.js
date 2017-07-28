import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  Dimensions,
  ToastAndroid,
  KeyboardAvoidingView,
  View
} from 'react-native';
import {Actions} from 'react-native-router-flux'
import {Input} from '../components/UI'
import Button from 'react-native-button';
import Spinner from 'react-native-loading-spinner-overlay';
import {get} from '../components/Fetch'
export default class LoginView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      phone: '13037192473',
      pwd: '12345678',
      loading: false
    }
  }
  _onChange (key, value) {
    this.setState({
      [key]:value
    })
  }
  _onSubmit () {
    console.log(this.state.phone,this.state.pwd)
    const params = {
      tel: this.state.phone,
      pwd: this.state.pwd
    }
    if (!this.state.phone){
      ToastAndroid.show('请输入手机号！', ToastAndroid.SHORT)
    } else if (!this.state.pwd) {
      ToastAndroid.show('请输入登录密码！', ToastAndroid.SHORT)
    } else {
      this.setState({loading:true})
      fetch('http://liuwbox.com/zzbao/app/user/login.htm?tel='+params.tel+'&pwd='+params.pwd, {
        method: 'post',
        mode: 'cor'
      }).then(res=>{
        res.json().then(res=>{
          this.setState({loading:false})
          if(!res.status){
            ToastAndroid.show(res.msg, ToastAndroid.SHORT)
          } else if (res.status === 1) {
            ToastAndroid.show('登录成功！', ToastAndroid.SHORT)
            console.log(res)
            storage.save({
              key: 'loginState',
              data: res.data.userInfo,
              expires: null
            })
            Actions.tabBar(res.data.userInfo)
          }
        })
      })
    }
  }
  render() {
    return (
        <View style={[styles.container,{padding:20}]}>
          <Spinner visible={this.state.loading} size={'small'} textContent={"正在登录中"} overlayColor="rgba(0,0,0,0.6)" textStyle={{fontSize:14,color:'#fff',marginTop:-70}}/>
          <Image style={{width:152,height:57,marginBottom:50}} source={require('../../assets/images/logo.png')}></Image>
          <Input 
            icon={require('../../assets/images/phone.png')} 
            value='13037192473' 
            titleColor="#2b2b2b" 
            valueColor="#2b2b2b" 
            placeholder="请输入手机号" 
            readonly={false} 
            type="numeric" 
            align="left" 
            border='all'
            max={11}
            onchange={this._onChange.bind(this, 'phone')}
            ref="phone"
            style={{borderTopWidth:.5,borderRightWidth:.5,borderLeftWidth:.5}}
          ></Input>
          <Input 
            icon={require('../../assets/images/pwd.png')} 
            value='12345678' 
            titleColor="#2b2b2b" 
            valueColor="#2b2b2b" 
            placeholder="请输入密码" 
            readonly={false} 
            type="default" 
            password={true} 
            align="left" 
            border='all' 
            onchange={this._onChange.bind(this, 'pwd')}
            style={{borderTopWidth:.5,borderRightWidth:.5,borderLeftWidth:.5,marginTop:10}}
          ></Input>
          <Button
            containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: '#EB3D00',width:'100%',justifyContent:'center',marginTop:20}}
            style={{fontSize: 14, color: '#fff'}}
            onPress={this._onSubmit.bind(this)}
            styleDisabled={{color: 'red'}}>
            登录
          </Button>
          <View style={{flexDirection:'row',alignItems:'center',paddingTop:20}}>
            <Text>忘记密码？</Text>
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
});
