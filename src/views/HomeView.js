import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  BackAndroid,
  ToastAndroid,
  TouchableHighlight,
  Platform
} from 'react-native';
import {Actions} from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/Ionicons';
import GiftedListView from 'react-native-gifted-listview'
export default class Home extends Component {
  _onFetch(page = 1, callback, options) {
    setTimeout(() => {
      var rows = ['row '+((page - 1) * 3 + 1), 'row '+((page - 1) * 3 + 2), 'row '+((page - 1) * 3 + 3)];
      if (page === 3) {
        callback(rows, {
          allLoaded: true, // the end of the list is reached
        });        
      } else {
        callback(rows);
      }
    }, 1000); // simulating network fetching
  }
  _onPress() {
    console.log(' pressed');
  }
  // componentWillMount () {
  //   BackAndroid.addEventListener('hardwareBackPress', () => {
  //     console.log(this)
  //   });
  // }
  onBackAndroid () {
    // if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
    //   return false;
    // }
    // this.lastBackPressed = Date.now();
    // ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
    // return true;
  }
  _renderRowView(rowData) {
    return (
      <TouchableHighlight 
        style={styles.row} 
        underlayColor='#c8c7cc'
        onPress={() => Actions.offerDetail({data: rowData})}
      >  
        <Text>{rowData}</Text>
      </TouchableHighlight>
    );
  }
  render() {
    return (
      <View style={{flex:1}}>
        <GiftedListView
          rowView={this._renderRowView}
          onFetch={this._onFetch}
          firstLoader={true} // display a loader for the first fetching
          pagination={true} // enable infinite scrolling using touch to load more
          refreshable={true} // enable pull-to-refresh for iOS and touch-to-refresh for Android
          withSections={false} // enable sections
        />
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
