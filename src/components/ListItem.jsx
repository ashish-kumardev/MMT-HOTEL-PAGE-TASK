import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {ChildAgeContext} from '../context/ChildAgeContext';

const ListItem = ({label, subLabel, initialValue, onChangeText}) => {
  const [numbers, setNumbers] = useState(initialValue + '');
  return (
    <View style={styles.listItem}>
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 18}}>{label}</Text>
        {subLabel && (
          <Text style={{fontSize: 12, color: '#808080'}}>{subLabel}</Text>
        )}
      </View>
      <TextInput
        style={styles.textInput}
        value={numbers}
        onChangeText={value => {
          if (onChangeText) {
            onChangeText(+value);
          }
          setNumbers(+value);
        }}
      />
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    borderColor: '#808080',
    borderWidth: 1,
    borderRadius: 10,
  },
  // dropDownIcon: {
  //   position: 'absolute',
  //   right: 10,
  // },
});
