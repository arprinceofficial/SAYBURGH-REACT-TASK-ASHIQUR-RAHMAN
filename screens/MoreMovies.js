import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Dimensions, ScrollView, ActivityIndicator  } from 'react-native';
import {
    getPopularMovies,

} from '../services/Services';
import List from '../components/List';
import Error from '../components/Error';


const dimensions = Dimensions.get('screen');

// --------------------- Function Collection Data From Api (Services) ---------------------
export default function Movies({navigation}) {
  const [popularMovies, setpopularMovies] = useState();
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const getData = () => {
    return Promise.all([

      getPopularMovies(),

    ]);
  };

  useEffect(() => {
    getData().then(([
      popularMoviesData,
    ]) =>
    { 
      setpopularMovies(popularMoviesData);
    })
    .catch(() => {
      setError(true)
    })
    .finally(() => {
      setLoaded(true)
    });

  }, []);
    
  // When Click Button Here We Show Rest of the Movie List
  return (
      <React.Fragment>
      {loaded && !error && (
        <ScrollView>
          {/* Popular Movies */}
          {popularMovies &&  (
            <View style={styles.carousel}>
              <List style={styles.movieList} navigation={navigation}  content={popularMovies.slice(11, 20)} />
            </View>
          )}
        </ScrollView>
      )}

      {!loaded && (<ActivityIndicator style={styles.ActivityIndicator} size="large" />)}
      {error && <Error></Error>}
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
    movieList: {
        flex: 1,
        flexDirection:'column',
    },
  sliderText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  ActivityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carousel: {
    flex: 1,
    flexDirection:'row',
  },

});