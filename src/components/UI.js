import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableNativeFeedback,
  View
} from 'react-native';
import PopupDialog, { SlideAnimation } from 'react-native-popup-dialog';
export class Input extends Component {
  constructor(props) {
    super(props)
  }
  _renderValue () {
    return (
      <TextInput 
        style={[styles.text,{alignSelf:'flex-end',color:this.props.valueColor,width:'100%',textAlign:this.props.align}]} 
        defaultValue={this.props.value}
        placeholder={this.props.placeholder}
        placeholderTextColor="#cacaca"
        editable={!this.props.readonly}
        keyboardType={this.props.type}
        maxLength={this.props.max}
        secureTextEntry={this.props.password}
        underlineColorAndroid='transparent'
        onChangeText={this.props.onchange}
      >
      {this.props.value}
      </TextInput>
    )
  }
  render() {
    return (
      <View style={[styles.row,this.props.style]}>
        <View style={[styles.col]}>
          <Image style={{width:30,height:30}} source={this.props.icon}></Image>
          <Text style={[styles.text,{alignSelf:'flex-start',color:this.props.titleColor}]}>{this.props.title}</Text>
        </View>
        <View style={[styles.col,{flex:1}]}>
          {this._renderValue()}
        </View>
      </View>
    )
  }
}

export class Cell extends Component {
  constructor(props) {
    super(props)
  }
  _renderValue () {
    return <Text style={[styles.text,{alignSelf:'flex-end',color:this.props.valueColor}]}>{this.props.value}</Text>
  }
  render() {
    return (
      <View style={[{flexDirection:'column',height:45},this.props.style]}>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.SelectableBackground()}
          onPress={this.props.onPress}
        >
          <View style={[styles.row]}>
            <View style={[styles.col]}>
              <Image style={{width:30,height:30,marginLeft:20}} source={this.props.icon}></Image>
              <Text style={[styles.text,{alignSelf:'center',color:this.props.titleColor,marginLeft:20}]}>{this.props.title}</Text>
            </View>
            <View style={[styles.col,{flex:1,flexDirection:'row'}]}>
              <View style={{flex:1,alignSelf:'center'}}>
                {this._renderValue()}
              </View>
              <View style={{alignSelf:'center'}}>
                <Image style={{width:28,height:28}} source={this.props.rightIcon}></Image>
              </View>
            </View>
          </View>
        </TouchableNativeFeedback>
      </View>
    )
  }
}

export class SelectArea extends Component {
  render () {
    return (
      <View>
        <Text>popup</Text>
        <PopupDialog
          ref={(popupDialog) => { this.popupDialog = popupDialog; }}
        >
          <View>
            <Text>Hello</Text>
          </View>
        </PopupDialog>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  row:{
    backgroundColor:'#fff',
    flexDirection: 'row',
    height:'100%',
    alignItems: 'center',
    borderColor:'#E9E9E9',
    borderBottomWidth:.5,
    paddingLeft:10,
    paddingRight:10
  },
  col:{
    flexDirection:'row',
    justifyContent:'center',
  },
  text: {
    fontSize:16
  }
});
