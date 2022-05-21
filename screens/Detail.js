
import React, {useState, useEffect} from 'react';
import { Text, ActivityIndicator, StyleSheet, View, ScrollView, Image, Dimensions } from 'react-native';
import StarRating from 'react-native-star-rating';
// import {getMovie} from '../services/Services';

const placeholderImage = require('../assets/Images/placeholder.jpg');
const height = Dimensions.get('window').height;


const Detail = ({ route, navigation }) => {

    // const { movieId } = route.params.movieDetail.id;
    // const [movieDetail, setMovieDetail] = useState();
    // const [loaded, setLoaded] = useState(false);

    // useEffect(() => {
    //     getMovie(movieId).then(movieData => {
    //         setMovieDetail(movieData);
    //         setLoaded(true);
    //     })
    // }, [movieData]);




    const [loaded, setLoaded] = useState(false);
    const { movieDetail } = route.params;
    return (
        <React.Fragment>
            {!loaded && (
                <ScrollView>
                    <View>
                        <Image
                            resizeMode='cover'
                            style={styles.image}
                            source={
                                movieDetail.poster_path ? { uri: 'https://image.tmdb.org/t/p/w500' + movieDetail.poster_path } : placeholderImage
                            }
                        />
                        <Text style={styles.movieTitle}>{movieDetail.title}</Text>
                        <StarRating
                            maxStars={5}
                            rating={movieDetail.vote_average / 2}
                        />
                        
                    </View>
                </ScrollView>
            )}
            {loaded && (<ActivityIndicator style={styles.ActivityIndicator} size="large" />)}
        </React.Fragment>
    );
}


const styles = StyleSheet.create({
    image: {
        height: height/2,
    },
    movieTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },
    ActivityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Detail;