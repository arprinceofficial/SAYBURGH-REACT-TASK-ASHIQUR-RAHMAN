import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getPopularMovies } from '../services/Services';



export default function Home() {
  const [movies, setMovies] = useState('');
    const [error, setError] = useState(false);


  useEffect(() => {
    getPopularMovies()
      .then(movies => {
        setMovies(movies[0]);
      })
      .catch(error => {
        setError(error);
      });
    // console.log(movies);
  }, []);
    
    return (
        <View style={styles.container}>
            <Text>Title: {movies.original_title}</Text>
            <Text>Title: {movies.title}</Text>
            <Text>Title: {movies.vote_count}</Text>
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