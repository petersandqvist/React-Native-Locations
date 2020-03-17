import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Header from './components/Header';
import GetLocations from './components/GetLocations';

const App = () => {
  return (
    <View>
      <Header />
      <View style={styles.Container}>
        <GetLocations />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    padding: 3,
    margin: 3,
  },
});

export default App;
