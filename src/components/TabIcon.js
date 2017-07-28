import React, {
  PropTypes,
} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

const propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string,
};

const TabIcon = (props) => {
  return (
    <View>
      <Image style={styles.image} source={props.focused ?require('../../assets/images/nav1_active.png'): require('../../assets/images/nav1.png')}/>
    </View>
  )
};
TabIcon.propTypes = propTypes;

const styles = StyleSheet.create({
  image: {
    width:40,
    height:40
  }
});

export default TabIcon