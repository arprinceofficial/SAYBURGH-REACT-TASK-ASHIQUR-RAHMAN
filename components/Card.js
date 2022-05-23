import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';

const placeholderImage = require('../assets/Images/placeholder.jpg');

const propTypes = {
    item: PropTypes.object,
}


// Here We Show Every Movie Images When Scrolling and Clicking It Redirect to Detail Page
class Card extends React.PureComponent {

    render() {
        const { item, navigation } = this.props;

        return (
            <TouchableOpacity onPress={() => navigation.navigate('Detail', {movieDetail: item})} style={styles.container}>
                <Image
                    resizeMode='cover'
                    style={styles.image}
                    source={
                        item.poster_path ? { uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path } : placeholderImage
                    }
                />
                {!item.poster_path && <Text style={styles.movieName}>{item.title}</Text>}
            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        padding: 5,
        position: 'relative',
        height: 200,
    },
    image: {
        height: 200,
        width: 140,
        borderRadius: 20,
    },
    movieName: {
        width: 100,
        top: 10,
    },
});


Card.propTypes = propTypes;

export default Card;