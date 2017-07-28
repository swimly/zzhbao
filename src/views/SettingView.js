import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';
import {Cell} from '../components/UI'
export default class SettingView extends Component {
  render() {
    return (
      <ScrollView>
        <Cell title="我的资料" titleColor="#2b2b2b" rightIcon={require('../../assets/images/right.png')}></Cell>
        <Cell title="修改支付密码" titleColor="#2b2b2b" rightIcon={require('../../assets/images/right.png')}></Cell>
        <Cell title="修改登录密码" titleColor="#2b2b2b" rightIcon={require('../../assets/images/right.png')}></Cell>
        <Cell title="更换绑定手机号" titleColor="#2b2b2b" value="18827078587" rightIcon={require('../../assets/images/right.png')}></Cell>
        <Cell style={{marginTop:10}} title="清空缓存" titleColor="#2b2b2b" value="10.08M" rightIcon={require('../../assets/images/right.png')}></Cell>
        <Cell title="客服热线" titleColor="#2b2b2b" value="40081 524 415" rightIcon={require('../../assets/images/right.png')}></Cell>
        <Cell title="常见问题" titleColor="#2b2b2b" rightIcon={require('../../assets/images/right.png')}></Cell>
        <Cell title="意见反馈" titleColor="#2b2b2b" rightIcon={require('../../assets/images/right.png')}></Cell>
        <Cell title="关于我们" titleColor="#2b2b2b" rightIcon={require('../../assets/images/right.png')}></Cell>
        <Cell style={{marginTop:10}} title="版本更新" titleColor="#2b2b2b" value="v1.0" rightIcon={require('../../assets/images/right.png')}></Cell>
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
