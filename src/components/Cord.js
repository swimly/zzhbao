import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
export default class Cord extends Component {
  render() {
    return (
      <View style={this.props.style}>
        <View style={{flex:1,flexDirection:'column',alignItems:'center'}}>
          <View style={{flexDirection:'row',alignItems:'flex-end'}}>
            <Text style={[{color:'#eb3d00',fontSize:24},this.props.numStyle]}>230</Text>
            <Text style={[{color:'#eb3d00',fontSize:16,marginLeft:3},this.props.numStyle]}>分</Text>
          </View>
          <Text style={[{color:'#3a3a3a',fontSize:14},this.props.TextStyle]}>累计积分收入</Text>
        </View>
        <View style={{width:.5,height:30,alignSelf:'center',backgroundColor:'#E0E0E0'}}></View>
        <View style={{flex:1,flexDirection:'column',alignItems:'center'}}>
          <View style={{flexDirection:'row',alignItems:'flex-end'}}>
            <Text style={[{color:'#eb3d00',fontSize:24},this.props.numStyle]}>230</Text>
            <Text style={[{color:'#eb3d00',fontSize:16,marginLeft:3},this.props.numStyle]}>分</Text>
          </View>
          <Text style={[{color:'#3a3a3a',fontSize:14},this.props.TextStyle]}>账户积分余额</Text>
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
