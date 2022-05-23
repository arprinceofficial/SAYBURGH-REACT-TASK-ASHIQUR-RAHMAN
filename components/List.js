import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Card from './Card';
import PropTypes from 'prop-types';


const propTypes = {
    title: PropTypes.string,
    content: PropTypes.array,
}


// Rendering Movie List From Here
class List extends React.PureComponent {

    render() {
        const { title, content, navigation } = this.props;
        
        return (
            <View style={styles.list}>
                <View>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View>
                    <FlatList
                        data={content}
                        horizontal={true}
                        renderItem={({ item }) =>
                            <Card navigation={navigation} item={item}/>
                        }
                    >
                    </FlatList>
                </View>
            </View>
        );
    }
}




const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
    },
});

List.propTypes = propTypes;

export default List;