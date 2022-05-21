
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



const Detail = ({ route, navigation }) => {
    
    const { movieDetail } = route.params;
    // const { movieDetail } = route.params.movieDetail;
    return (
        <React.Fragment>
            <Text>{movieDetail.title}</Text>
        </React.Fragment>
    );
}

export default Detail;