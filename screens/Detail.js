
import React, {useState, useEffect} from 'react';
import { Text, ActivityIndicator, StyleSheet, View, ScrollView, Image, Dimensions } from 'react-native';
import StarRating from 'react-native-star-rating';

const placeholderImage = require('../assets/Images/placeholder.jpg');
const height = Dimensions.get('window').height;


const Detail = ({ route, navigation }) => {

    const [loaded, setLoaded] = useState(false);
    const { movieDetail } = route.params;

    return (
        <React.Fragment>
            {!loaded && (
                <ScrollView>
                    <View >
                        <Image
                            resizeMode='cover'
                            style={styles.image}
                            source={
                                movieDetail.poster_path ? { uri: 'https://image.tmdb.org/t/p/w500' + movieDetail.poster_path } : placeholderImage
                            }
                        />
                        <View style={styles.body}>
                            <Text style={styles.movieTitle}>{movieDetail.title}</Text>
                            <StarRating
                                maxStars={5}
                                starSize={25}
                                spacing={5}
                                rating={movieDetail.vote_average / 2}
                            />
                            <Text style={styles.Date}><Text  style={styles.bold}>Release Date :</Text> {movieDetail.release_date}</Text>
                            <Text style={styles.Description}>Description</Text>
                            <Text>{movieDetail.overview}</Text>
                        </View>
                    </View>
                </ScrollView>
            )}
            {loaded && (<ActivityIndicator style={styles.ActivityIndicator} size="large" />)}
        </React.Fragment>
    );
}


const styles = StyleSheet.create({
    body: {
        marginLeft: 10,
        marginRight: 10,
    },
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
    Date: {
        marginTop: 10,
        fontSize: 15,
    },
    Description: {
        marginTop: 10,
        marginBottom: 5,
        fontSize: 20,
        fontWeight: 'bold',
    },
    bold: {
        fontWeight: 'bold',
    },
});

export default Detail;