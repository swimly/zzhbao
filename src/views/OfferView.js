import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableHighlight,
  FlatList,
  Image,
  View
} from 'react-native';
import {Actions} from 'react-native-router-flux'
import OfferItem from '../components/OfferItem'
import GiftedListView from 'react-native-gifted-listview'
export default class Offer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: []
    }
  }
  _onFetch(page = 1, callback, options) {
    fetch('http://www.liuwbox.com/zzbao/app/insurance/company.htm',{
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res=>{
      res.json().then(res=>{
        console.log(res.data.companyList)
        if (page === 1) {
          callback(res.data.companyList, {
            allLoaded: true, // the end of the list is reached
          });
        } else {
          callback(res.data.companyList);
        }
      })
    })
  }
  _onPress(rowData) {
    Actions.offerDetail({title: rowData.name, banner: rowData.bigPic});
    Actions.refresh({title:rowData.name})
  }
  _renderRowView(rowData) {
    return (
      <TouchableHighlight onPress={() => {this._onPress(rowData)}} underlayColor='#c8c7cc'>
        <View style={[styles.offerItem]}>
          <View style={{flex:2,justifyContent:'center',padding:15}}>
            <View style={{width:82,height:82,borderWidth:.5,borderColor:'#E5E5E5'}}>
              <Image style={{width:80,height:80,backgroundColor:'#fff'}} source={{uri:rowData.logo}}></Image>
            </View>
          </View>
          <View style={{flex: 7,justifyContent:'center',paddingLeft:15}}>
            <Text style={[styles.offerTitle]}>{rowData.name}</Text>
            <Text style={[styles.offerText]}>承保地区：{rowData.insureArea}</Text>
            <Text style={[styles.offerText]}>承保车辆：{rowData.insureCar}</Text>
            <Text style={[styles.offerText, {color:'#eb3d00'}]}>最高推广费：30%</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <GiftedListView
          rowView={this._renderRowView.bind(this)}
          onFetch={this._onFetch}
          firstLoader={true} // display a loader for the first fetching
          pagination={true} // enable infinite scrolling using touch to load more
          refreshable={true} // enable pull-to-refresh for iOS and touch-to-refresh for Android
          withSections={false} // enable sections
          customStyles={{
            paginationView: {
              backgroundColor: '#fff',
            },
          }}

          refreshableTintColor="blue"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    overflow:'scroll'
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  icon: {
    width:72,
    height:72
  },
  right: {
    width:64,
    height:64
  },
  navBar: {
    height: 64,
    backgroundColor: '#CCC'
  },
  row: {
    padding: 10,
    height: 44,
  },
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
