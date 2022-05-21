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


const dimensions = Dimensions.get('screen');

export default function Home() {
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
    }

    useEffect(() => {
      getData().then(([
        upComingMoviesData,
        popularMoviesData,
        PopularTvData,
        FamilyMoviesData,
        DocumentaryMoviesData
      ]) => { 
        const moviesImagesArray = [];
                upComingMoviesData.forEach(upComingMoviesData => {
                   moviesImagesArray.push('https://image.tmdb.org/t/p/w500'+upComingMoviesData.poster_path);
                });
        setMovies(moviesImagesArray);
        setpopularMovies(popularMoviesData);
        setPopularTv(PopularTvData);
        setFamilyMovies(FamilyMoviesData);
        setDocumentaryMovies(DocumentaryMoviesData);
      }).catch(error => {
        setError(true)
      }).finally(() => {
        setLoaded(true)
      });

  }, []);
    
    return (
      <React.Fragment>
        {loaded && (
          <ScrollView>
              {/* UpComing Movies Images */}
              {moviesImages && (
                <View style={styles.slidercontainer}>
                  <SliderBox
                    images={moviesImages}
                    sliderBoxHeight={dimensions.height / 2}
                    autoplay={true}
                    circleLoop
                    dotStyle={styles.sliderDot}
                  />
               </View>
              )}
              {/* Popular Movies */}
              {popularMovies && (
                <View style={styles.carousel}>
                  <List title="Popular Movies" content={popularMovies} />
                </View>
              )}
              {/* Popular Tv Shows */}
              {PopularTv && (
                <View style={styles.carousel}>
                  <List title="Popular TV Shows" content={PopularTv} />
                </View>
              )}
              {/* Family Movies */}
              {FamilyMovies && (
                <View style={styles.carousel}>
                  <List title="Family Movies" content={FamilyMovies} />
                </View>
              )}
              {/* Documentary Movies */}
              {DocumentaryMovies && (
                <View style={styles.carousel}>
                    <List title="Documentary Movies" content={DocumentaryMovies} />
                </View>
              )} 
          </ScrollView>
        )}
        {!loaded && (<ActivityIndicator size="large" />)}  
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
  slidercontainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
    carousel: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sliderDot: {
        height: 0,
    },
});