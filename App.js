

import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import Detail from './screens/Detail';
import MoreMovies from './screens/MoreMovies';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();
export default function App() {
  
  return (
    // --------------------- Navigation Bar ---------------------
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} options={{ title: 'Details' }} />
        <Stack.Screen name="MoreMovies" component={MoreMovies} options={{ title: 'More Movies' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



