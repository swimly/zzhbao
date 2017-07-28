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
      <Text>投保城市</Text>
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