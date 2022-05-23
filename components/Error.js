import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';


const propTypes = {
    errorText1: PropTypes.string,
    errorText2: PropTypes.string,
}

const defaultProps = {
    errorText1: 'Opps! Something went wrong',
    errorText2: 'Make sure you have internet connection',
};

// When API Failed to Fetch Data Then We Show This Error Message
class Error extends React.PureComponent {

    render() {
        const { errorText1, errorText2 } = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.text}>{errorText1}</Text>
                <Text style={styles.text}>{errorText2}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});


Error.propTypes = propTypes;
Error.defaultProps = defaultProps;


export default Error;