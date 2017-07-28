import React,{Component} from 'react';  
import {Image, Text} from 'react-native';  
 
export default class TabBarItem extends Component {  
 
    render() {  
        return(  
            this.props.focused ? <Text>{this.props.selectedImage}</Text> : <Text>{this.props.normalImage}</Text>
        )  
    }  
 
}