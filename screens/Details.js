import React from 'react';
import { useEffect, useState } from 'react';
import { Text, View, ScrollView, Image, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import { getMovie } from "../services/services";
import StarRating from "react-native-star-rating";

const placeholderImage = require("../assets/images/placeholder.png")
const height = Dimensions.get('screen').height;


const Details = ({ route, navigation }) => {
    const movieId = route.params.movieId;
    const [movieInfo, setMovieInfo] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        getMovie(movieId).then(info => setMovieInfo(info));
        setLoaded(true);
        console.log(process.env.REACT_APP_APIKEY);
    }, [])

    useEffect(() => {
        console.log(movieInfo);
    }, [movieInfo])

    return (
        <>
        {loaded ?
            <ScrollView>
                <Image
                style={styles.image}
                resizeMode="cover"
                source={movieInfo ? {uri: `https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`} : placeholderImage}
                />
                <View style={styles.container}>
                {movieInfo && <Text style={styles.movieTitle}>{movieInfo.title}</Text>}
                {movieInfo && <Text style={styles.overview}>{movieInfo.overview}</Text>}
                {movieInfo && <Text style={styles.release}>RELEASE DATE: {movieInfo.release_date}</Text>}
                </View>
                <Text style={{fontWeight: 'bold', textAlign: 'center', marginTop: 10}}>GENRES: </Text>
                <View style={styles.genresContainer}>
                {movieInfo && movieInfo.genres.map((x, i) => {
                    return <Text style={styles.genre} key={i}>{x.name}</Text>
                })}
                </View>
                <View style={styles.container}>
                {movieInfo && <StarRating fullStarColor={'gold'} disabled={true} maxStars={5} rating={movieInfo.vote_average/2} />}
                </View>
            </ScrollView>
         : <ActivityIndicator size="large" color='blue' />
        }
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center"
    },
    image: {
        height: height / 1.5
    },
    movieTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10
    },
    genre: {
        marginRight: 10,
        fontWeight: 'bold'
    },
    genresContainer: {
        flexDirection: 'row',
        justifyContent: "center"
    },
    overview: {
        padding: 15
    },
    release: {
        fontWeight: 'bold'
    }
})

export default Details;