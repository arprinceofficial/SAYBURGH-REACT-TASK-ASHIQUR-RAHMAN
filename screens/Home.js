import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native';
import {
    getPopularMovies,
    getUpComingMovies
} from '../services/Services';
import { SliderBox } from "react-native-image-slider-box";
import List from '../components/List';


const dimensions = Dimensions.get('screen');

export default function Home() {
    const [moviesImages, setMovies] = useState('');
    const [popularMovies, setpopularMovies] = useState('');
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
    // console.log(movies);
  }, []);
    
    return (
        <React.Fragment>
            <View style={styles.slidercontainer}>
            <SliderBox
                images={moviesImages}
                sliderBoxHeight={dimensions.height / 1.5}
                autoplay={true}
                circleLoop
                dotStyle={styles.sliderDot}
            />
            </View>
            <View style={styles.carousel}>
                <List title="Upcoming Movies" content={popularMovies} />
            </View>
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
});