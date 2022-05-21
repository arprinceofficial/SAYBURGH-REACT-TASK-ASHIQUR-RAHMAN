import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
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
    const [moviesImages, setMovies] = useState('');
    const [popularMovies, setpopularMovies] = useState('');
    const [PopularTv, setPopularTv] = useState('');
    const [FamilyMovies, setFamilyMovies] = useState('');
    const [DocumentaryMovies, setDocumentaryMovies] = useState('');
    const [error, setError] = useState(false);


    useEffect(() => {
        getUpComingMovies()
            .then(movie => {
                const moviesImagesArray = [];
                movie.forEach(movie => {
                   moviesImagesArray.push('https://image.tmdb.org/t/p/w500'+movie.poster_path);
                });
            setMovies(moviesImagesArray);
        })
            .catch(error => {
                setError(error);
            });
        
        
    getPopularMovies()
        .then(movies => {
            setpopularMovies(movies);
      })
      .catch(error => {
        setError(error);
      });


     getPopularTv()
        .then(movies => {
            setPopularTv(movies);
      })
      .catch(error => {
        setError(error);
      });

     getFamilyMovies()
        .then(movies => {
            setFamilyMovies(movies);
      })
      .catch(error => {
        setError(error);
      });

     getDocumentaryMovies()
        .then(movies => {
            setDocumentaryMovies(movies);
      })
      .catch(error => {
        setError(error);
      });

  }, []);
    
    return (
        <React.Fragment>
            <ScrollView>
                <View style={styles.slidercontainer}>
                    <SliderBox
                        images={moviesImages}
                        sliderBoxHeight={dimensions.height / 2}
                        autoplay={true}
                        circleLoop
                        dotStyle={styles.sliderDot}
                    />
                </View>

                <View style={styles.carousel}>
                    <List title="Popular Movies" content={popularMovies} />
                </View>
          
                <View style={styles.carousel}>
                    <List title="Popular TV Shows" content={PopularTv} />
                </View>
          
                <View style={styles.carousel}>
                    <List title="Family Movies" content={FamilyMovies} />
                </View>
          
                <View style={styles.carousel}>
                    <List title="Documentary Movies" content={DocumentaryMovies} />
                </View>
                
            </ScrollView>
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