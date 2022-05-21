import React from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native';
import Card from './Card';
import PropTypes from 'prop-types';


const propTypes = {
    // item: PropTypes.object.isRequired,
    title: PropTypes.object,
    content: PropTypes.array,
}



class List extends React.PureComponent {

    render() {
        const {title, content}=this.props;
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
                        <Card item={item}/>
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 25,
    },
});

List.propTypes = propTypes;

export default List;