import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import axios from 'axios';

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
      {locations.map(location => (
        <Text key={location.id}>{location.name}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({});

export default GetLocations;
