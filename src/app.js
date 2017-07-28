import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  StatusBar,
  ToastAndroid,
  AsyncStorage,
  View
} from 'react-native';
const height = StatusBar.currentHeight;
import Storage from 'react-native-storage';
import {Scene, Router, Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import TabBarItem from './components/TabBarItem';
import HomeView from './views/HomeView'
import CustomerView from './views/CustomerView'
import OfferView from './views/OfferView'
import PersonerView from './views/PersonerView'
import OfferDetailView from './views/OfferDetailView'
import MessageView from './views/MessageView'
import CustomerAddView from './views/CustomerAddView'
import QrcodeView from './components/Qrcode'
import LoginView from './views/LoginView'
import SettingView from './views/SettingView'
import WalletView from './views/WalletView'
import ExchangeView from './views/ExchangeView'
//下面ICON组件 ，改变选中/未选中的图标颜色
export default class Personer extends Component {
  constructor (props) {
    super(props)
    console.log(this,'初始化')
    this.state = {
      logined: false
    }
    global.storage = new Storage({
      size: 1000,
      storageBackend: AsyncStorage,
      defaultExpires: 1000*3600*24,
      enableCache: true,
      sync: {}
    })
    storage.load({
      key: 'loginState',
      autoSync: true,
      syncInBackground: true,
    }).then(ret => {
      if (ret) {
        ToastAndroid.show('已登录！', ToastAndroid.SHORT)
        Actions.tabBar(ret)
      }
    })
  }
  _message () {
    alert(0)
  }
  render() {
    return (
      <View style={{flex:1}}>
        <StatusBar
         animated={true}
         backgroundColor='rgba(0,0,0,0)'
         barStyle="default"
         networkActivityIndicatorVisible
         translucent={true}
        />
        <Router>
          <Scene key="root">
            <Scene
             key="tabBar"
             hideNavBar 
             name="tabBar" 
             backBehavior="none"
             tabs 
             initial={this.state.logined}
             showLabel={true} 
             showIcon 
             tabBarPosition="bottom" 
             tabBarStyle={[styles.tabBarStyle]} 
             labelStyle={[styles.labelStyle]}
             iconStyle={[styles.iconStyle]}
             indicatorStyle={{height:0}}
             activeTintColor="#EB3D00"
             inactiveTintColor="#999"
             >
              <Scene 
                key="home" 
                pressColor 
                title="首页" 
                tabBarLabel="首页" 
                navigationBarTitleImage = {require('../assets/images/logo.png')}
                navigationBarTitleImageStyle={{width:85,height:32,alignSelf:'center'}}
                navigationBarStyle={[styles.headerBarStyle,{paddingLeft:30}]}
                headerTitleStyle={[styles.title,{alignSelf:'center'}]}
                titleStyle={[styles.titleStyle]}
                rightButton={()=>{return (<TouchableHighlight onPress={() => {Actions.message({userId: '021'})}} underlayColor='#c8c7cc'><View><Image style={{width:30,height:30,marginRight:10}} source={require('../assets/images/tips.png')}></Image></View></TouchableHighlight>)}}
                tabBarIcon={({focused, tintColor}) => {
                  return (
                    <TabBarItem  
                      tintColor={tintColor}  
                      focused={focused}  
                      normalImage={<Image source={require('../assets/images/nav1.png')}></Image>}  
                      selectedImage={<Image source={require('../assets/images/nav1_active.png')}></Image>}  
                    />  
                  )
                }}
                component={HomeView}
              >
              </Scene>
              <Scene 
                key="customer" 
                pressColor 
                title="客户管理" 
                tabBarLabel="客户管理" 
                headerTitleStyle={[styles.title,{alignSelf:'center'}]}
                navigationBarStyle={[styles.headerBarStyle,{paddingLeft:30}]}
                rightButton={()=>{return (<TouchableHighlight onPress={() => {Actions.customerAdd({userId: '021'})}} underlayColor='#c8c7cc'><View><Image style={{width:30,height:30,marginRight:10}} source={require('../assets/images/add.png')}></Image></View></TouchableHighlight>)}}
                tabBarIcon={({focused, tintColor}) => {
                  return (
                    <TabBarItem  
                      tintColor={tintColor}  
                      focused={focused}  
                      normalImage={<Image source={require('../assets/images/nav2.png')}></Image>}  
                      selectedImage={<Image source={require('../assets/images/nav2_active.png')}></Image>} 
                    />  
                  )
                }}
                component={CustomerView}
              >
              </Scene>
              <Scene 
                key="offer" 
                pressColor 
                title="车险报价" 
                tabBarLabel="车险报价" 
                headerTitleStyle={[styles.title,{alignSelf:'center'}]}
                navigationBarStyle={[styles.headerBarStyle,]}
                tabBarIcon={({focused, tintColor}) => {
                  return (
                    <TabBarItem  
                      tintColor={tintColor}  
                      focused={focused}  
                      normalImage={<Image source={require('../assets/images/nav3.png')}></Image>}  
                      selectedImage={<Image source={require('../assets/images/nav3_active.png')}></Image>} 
                    />  
                  )
                }}
                component={OfferView}
              >
              </Scene>
              <Scene 
                key="personer" 
                pressColor 
                title="我的" 
                tabBarLabel="我的"  
                headerTitleStyle={[styles.title,{alignSelf:'center',color:'#fff'}]}
                headerStyle={[styles.headerBarStyle,{backgroundColor:'#EB3D00'}]}
                navigationBarStyle={[{backgroundColor:'#EB3D00',shadowRadius:0,height:30,paddingLeft:50}]}
                rightButton={()=>{return (<View style={{flexDirection:'row'}}>
                    <TouchableHighlight onPress={() => {Actions.Setting({userId: '021'})}} underlayColor='#c8c7cc'><View><Image style={{width:20,height:20,marginRight:10}} source={require('../assets/images/setting.png')}
                    ></Image></View></TouchableHighlight>
                    <TouchableHighlight onPress={() => {Actions.customerAdd({userId: '021'})}} underlayColor='#c8c7cc'><View><Image style={{width:20,height:20,marginRight:10}} source={require('../assets/images/tips.png')}></Image></View></TouchableHighlight>
                  </View>)}}
                tabBarIcon={({focused, tintColor}) => {
                  return (
                    <TabBarItem  
                      tintColor={tintColor}  
                      focused={focused}  
                      normalImage={<Image source={require('../assets/images/nav4.png')}></Image>}  
                      selectedImage={<Image source={require('../assets/images/nav4_active.png')}></Image>} 
                    />  
                  )
                }}
                component={PersonerView}
              >
              </Scene>
            </Scene>
            <Scene 
              key="offerDetail" 
              title="平安车险"  
              component={OfferDetailView} 
              gesturesEnabled
              headerTitleStyle={[styles.title,{alignSelf:'center'}]}
              navigationBarStyle={[styles.headerBarStyle,{paddingRight:25}]}
              backButtonImage={require('../assets/images/back.png')}
            >
            </Scene>
            <Scene 
              key="message" 
              title="消息中心" 
              component={MessageView} 
              gesturesEnabled
              headerTitleStyle={[styles.title,{alignSelf:'center'}]}
              navigationBarStyle={[styles.headerBarStyle,{paddingRight:25}]}
              backButtonImage={require('../assets/images/back.png')}
            ></Scene>
            <Scene 
              key="customerAdd" 
              title="添加客户" 
              component={CustomerAddView} 
              gesturesEnabled
              headerTitleStyle={[styles.title,{alignSelf:'center'}]}
              navigationBarStyle={[styles.headerBarStyle,{paddingRight:25}]}
              backButtonImage={require('../assets/images/back.png')}
            ></Scene>
            <Scene 
              key="Login" 
              initial={!this.state.logined}
              title="用户登录" 
              component={LoginView} 
              gesturesEnabled
              headerTitleStyle={[styles.title,{alignSelf:'center'}]}
              navigationBarStyle={[styles.headerBarStyle]}
            ></Scene>
            <Scene 
              key="Setting" 
              title="设置" 
              component={SettingView} 
              gesturesEnabled
              headerTitleStyle={[styles.title,{alignSelf:'center'}]}
              navigationBarStyle={[styles.headerBarStyle,{paddingRight:25}]}
              backButtonImage={require('../assets/images/back.png')}
            ></Scene>
            <Scene 
              key="Wallet" 
              title="我的钱包" 
              rightButton={()=>{return <TouchableHighlight><View style={{marginRight:10}}><Text style={{color:'#fff'}}>兑换记录</Text></View></TouchableHighlight>}}
              component={WalletView} 
              gesturesEnabled
              headerTitleStyle={[styles.title,{alignSelf:'center',color:'#fff'}]}
              headerStyle={[styles.headerBarStyle,{backgroundColor:'#EB3D00'}]}
              navigationBarStyle={[{backgroundColor:'#EB3D00',shadowRadius:0,height:30,paddingLeft:50}]}
              backButtonImage={require('../assets/images/back_white.png')}
            ></Scene>
            <Scene 
              key="Exchange" 
              title="兑换记录" 
              component={ExchangeView} 
              gesturesEnabled
              headerTitleStyle={[styles.title,{alignSelf:'center'}]}
              navigationBarStyle={[styles.headerBarStyle,{paddingRight:25}]}
              backButtonImage={require('../assets/images/back.png')}
            ></Scene>
          </Scene>
        </Router>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#FBFBFB',
    borderTopWidth:.5,
    borderColor:'#ddd',
    height:62,
    paddingBottom:0
  },
  labelStyle: {
    fontSize: 14,
    height:14,
    marginTop:0
  },
  iconStyle: {
    height:28,
    width:28
  },
  headerBarStyle:{
    paddingTop:height,
    height:65
  },
  titleStyle: {
    fontSize:16,
    color:'#666'
  },
  title: {
    fontSize:16,
    color:'#4B4B4B',
    fontWeight: 'normal'
  }
});