import React from 'react';
import { TouchableOpacity, StyleSheet, Image, Text } from 'react-native';

const placeholderImage = require("../assets/images/placeholder.png")



const Card = ({item, navigation}) => {
    return (
        <TouchableOpacity onPress={() => {navigation.navigate('Details', {movieId: item.id})}} style={styles.container}>
            <Image 
            style={styles.image} 
            resizeMode={"cover"} //covers the container of the image with the exact dimensions that you specified
            source={item.poster_path ? {uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`} : placeholderImage}>
            </Image>
            {!item.poster_path && <Text style={styles.smallTitle}>{item.title}</Text>}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        position: "relative",
        alignItems: 'center',
        height: 200
    },
    image: {
        height: 200,
        width: 120,
        borderRadius: 20
    },
    smallTitle: {
        position: 'absolute',
        top: 10,
        width: 100,
        justifyContent: 'center',
        textAlign: 'center',
    }
})

export default Card;