import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useState} from 'react';
import RoomAndGuest from './components/RoomAndGuest';
import {AdultsContext} from './context/AdultsContext';
import {ChildContext} from './context/ChildContext';
import {RoomContext} from './context/RoomContext';

const Home = () => {
  const {adults} = useContext(AdultsContext);
  const {child} = useContext(ChildContext);
  const {room} = useContext(RoomContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <View style={{padding: 10}}>
        <TouchableOpacity
          style={styles.container}
          onPress={() => setIsOpen(true)}>
          <Image
            source={require('../src/assets/user.png')}
            style={{width: 25, height: 25}}
            tintColor={'#808080'}
          />
          <View style={styles.roomContainer}>
            <Text style={styles.guestRoomTxt}>Guest & Rooms</Text>
            <View style={styles.peopleContainer}>
              <Text style={styles.boldTxt}>{adults} Adults,</Text>
              {child > 0 && (
                <Text style={styles.boldTxt}>{child} Children,</Text>
              )}
              <Text style={styles.roomText}>{room} Room</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      {isOpen && <RoomAndGuest setIsOpen={setIsOpen} />}
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    gap: 10,
    borderRadius: 10,
  },
  roomContainer: {
    width: '80%',
  },
  guestRoomTxt: {
    textTransform: 'uppercase',
    color: '#808080',
  },
  peopleContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  boldTxt: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
