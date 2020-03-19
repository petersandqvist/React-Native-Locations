import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Header from './components/Header';
import GetLocations from './components/GetLocations';

const App = () => {
  return (
    <View style={styles.Container}>
      <Header />
      <GetLocations />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
});

export default App;
