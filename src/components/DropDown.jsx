import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const DropDown = ({}) => {
  return <View style={styles.dropDown}></View>;
};

export default DropDown;

const styles = StyleSheet.create({
  dropDown: {
    position: 'absolute',
    right: 20,
    bottom: -125,
    width: 80,
    borderRadius: 8,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    overflow: 'hidden',
    zIndex: 100,
  },
  dropDownValue: {
    textAlign: 'center',
    padding: 10,
  },
});
