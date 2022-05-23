import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, ActivityIndicator  } from 'react-native';
import {
    getPopularMovies,
    getUpComingMovies,
    getPopularTv,
    getFamilyMovies,
    getDocumentaryMovies,
} from '../services/Services';
import { SliderBox } from "react-native-image-slider-box";
import List from '../components/List';
import Error from '../components/Error';


const dimensions = Dimensions.get('screen');

// --------------------- Function Collection Data From Api (Services) ---------------------
export default function Home({navigation}) {
  const [moviesImages, setMovies] = useState();
  const [popularMovies, setpopularMovies] = useState();
  const [PopularTv, setPopularTv] = useState();
  const [FamilyMovies, setFamilyMovies] = useState();
  const [DocumentaryMovies, setDocumentaryMovies] = useState();
  
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const getData = () => {
    return Promise.all([
      getUpComingMovies(),
      getPopularMovies(),
      getPopularTv(),
      getFamilyMovies(),
      getDocumentaryMovies(),
    ]);
  };

  useEffect(() => {
    getData().then(([
      upComingMoviesData,
      popularMoviesData,
      PopularTvData,
      FamilyMoviesData,
      DocumentaryMoviesData
    ]) =>
    { 
      const moviesImagesArray = [];
      upComingMoviesData.forEach(upComingMoviesData => {
        moviesImagesArray.push('https://image.tmdb.org/t/p/w500'+upComingMoviesData.poster_path);
      });
      setMovies(moviesImagesArray);
      setpopularMovies(popularMoviesData);
      setPopularTv(PopularTvData);
      setFamilyMovies(FamilyMoviesData);
      setDocumentaryMovies(DocumentaryMoviesData);
    })
    .catch(() => {
      setError(true)
    })
    .finally(() => {
      setLoaded(true)
    });

  }, []);
    
  return (
    <React.Fragment>
      {loaded && !error && (
        <ScrollView>
          {/* UpComing Movies Images */}
          {moviesImages && (
            <View style={styles.slidercontainer}>
              <Text style={styles.sliderText}>Up Coming Movies</Text>
              <SliderBox
                images={moviesImages.slice(0, 10)}
                sliderBoxHeight={dimensions.height / 2}
                autoplay={true}
                circleLoop
                dotStyle={styles.sliderDot}
                dotColor="#FFEE58"
                inactiveDotColor="#90A4AE"
              />
            </View>
          )}
          <View style={styles.Sliderbody}>
            {/* Popular Movies */}
            {popularMovies && (
              <View style={styles.carousel}>
                <List navigation={navigation} title="Popular Movies" content={popularMovies.slice(0, 10)} />
              </View>
            )}
            {/* Popular Tv Shows */}
            {/* {PopularTv && (
              <View style={styles.carousel}>
                <List navigation={navigation} title="Popular TV Shows" content={PopularTv.slice(0, 10)} />
              </View>
            )} */}
            {/* Family Movies */}
            {FamilyMovies && (
              <View style={styles.carousel}>
                <List navigation={navigation} title="Family Movies" content={FamilyMovies.slice(0, 10)} />
              </View>
            )}
            {/* Documentary Movies */}
            {DocumentaryMovies && (
              <View style={styles.carousel}>
                <List navigation={navigation} title="Horror Movies" content={DocumentaryMovies.slice(0, 10)} />
              </View>
            )}
          </View>
        </ScrollView>
      )}

      
      {!loaded && (<ActivityIndicator style={styles.ActivityIndicator} size="large" />)}
      {error && <Error></Error>}
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  Sliderbody: {
    padding: 5,
  },
  slidercontainer: {
    marginTop: 15,
  },
  sliderText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    paddingLeft: 5,
  },
  ActivityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carousel: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  sliderDot: {
    width: 10,
    height: 10,
    // borderRadius: 5,
    // marginHorizontal: 0,
    // padding: 0,
    // margin: 0,
    // backgroundColor: "rgba(128, 128, 128, 0.92)"
  },
});