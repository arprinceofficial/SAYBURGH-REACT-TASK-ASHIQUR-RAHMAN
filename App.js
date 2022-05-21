

import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import { getPopularMovies } from './services/Services';

export default function App() {
  
  return (
    <View style={styles.container}>


      <Home></Home>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

