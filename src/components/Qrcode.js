import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import QRCode from 'react-native-qrcode';
export default class QrcodeView extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <QRCode
          value={this.props.url}
          size={160}
          bgColor='#666'
          fgColor='white'/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop:20,
    paddingBottom:20
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
