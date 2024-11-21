import React, {useContext} from 'react';
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ListItem from './ListItem';
import {ChildContext} from '../context/ChildContext';
import {RoomContext} from '../context/RoomContext';
import {AdultsContext} from '../context/AdultsContext';

const RoomAndGuest = ({setIsOpen}) => {
  const {adults, setAdults} = useContext(AdultsContext);
  const {room, setRoom} = useContext(RoomContext);
  const {child, setChild} = useContext(ChildContext);

  const data = new Array(child).fill(null).map((_, index) => ({
    id: `${index}`,
    label: `Child ${index + 1}`,
    initialValue: '1',
  }));

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={() => setIsOpen(false)}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#808080'}}>
          X
        </Text>
        <Text style={styles.headerText}>Rooms & Guests</Text>
      </TouchableOpacity>

      <View style={styles.listContainer}>
        <ListItem label="Rooms" initialValue={room} onChangeText={setRoom} />
        <ListItem
          label="Adults"
          initialValue={adults}
          onChangeText={setAdults}
        />
        <ListItem
          label="Children"
          subLabel="0-17 Years old"
          initialValue={child}
          onChangeText={value => {
            console.log('onchange', value);
            setChild(value);
          }}
        />
      </View>

      <Text style={styles.description}>
        Please provide right number of children along with their right age for
        best options and prices.
      </Text>

      {child > 0 && (
        <>
          <View style={styles.separator} />
          <ScrollView>
            <View style={styles.childListContainer}>
              <Text style={styles.childListHeader}>Age of Children</Text>
              <View style={{gap: 25, flex: 1}}>
                {data.map((item, index) => (
                  <ListItem
                    label={item.label}
                    initialValue={item.initialValue}
                    key={index}
                  />
                ))}
              </View>
            </View>
          </ScrollView>
        </>
      )}

      <View style={styles.buttonContainer}>
        <Button title="Done" onPress={() => setIsOpen(false)} />
      </View>
    </View>
  );
};

export default RoomAndGuest;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    gap: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    padding: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  headerText: {
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  listContainer: {
    gap: 25,
  },
  description: {
    marginHorizontal: 20,
    color: '#808080',
    fontSize: 12,
  },
  separator: {
    height: 1,
    backgroundColor: '#808080',
    width: '90%',
    alignSelf: 'center',
    marginVertical: 10,
  },
  childListContainer: {
    flex: 1, // Allow FlatList to expand and scroll properly
  },
  childListHeader: {
    color: '#808080',
    fontSize: 16,
    marginBottom: 10,
    paddingLeft: 20,
  },
  flatListContent: {
    gap: 20,
  },
  buttonContainer: {
    width: '90%',
    alignSelf: 'center',
  },
});
