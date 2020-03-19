import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, FlatList, Button} from 'react-native';
import axios from 'axios';
import FollowButton from './Button';

const GetLocations = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://storage.googleapis.com/engineering-4b0b7d62/locations_filtered.json',
      )
      .then(response => {
        console.log(response.data);
        return setLocations(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <View>
      <FlatList
        data={locations}
        keyExtractor={item => item.id.toString()} //item.id.toString()
        renderItem={({item}) => (
          //console.log(item.name);
          <View style={styles.row}>
            <Text style={styles.text}>{item.name}</Text>
            <Text>
              {item.latitude} {item.longitude}
            </Text>
            <View style={styles.buttonContainer}>
              <FollowButton />
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
  buttonContainer: {
    marginTop: 10,
    width: 100,
  },
});

export default GetLocations;
