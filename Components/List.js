import React from 'react';
import { View, Text, StyleSheet, FlatList} from "react-native"
import Card from './Card';

const List = ({navigation, title, content}) => {
    return (
        <>
        <View style={styles.list}>
            <Text style={styles.text}>{title}</Text>
        </View>
        <View>
            <FlatList
                data={content}
                horizontal={true}
                renderItem={({item}) => <Card item={item} navigation={navigation}/> }> 
            </FlatList>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    list: {
        marginTop: 15
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 5
    }
})

export default List;