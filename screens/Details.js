import React from 'react';
import { useEffect, useState } from 'react';
import { Text, View, ScrollView, Image, StyleSheet, Dimensions, ActivityIndicator, Modal } from 'react-native';
import { getMovie } from "../services/services";
import Video from "../Components/Video";
import PlayButton from '../Components/PlayButton';
import StarRating from "react-native-star-rating";

const placeholderImage = require("../assets/images/placeholder.png")
const height = Dimensions.get('screen').height;

const Details = ({ route }) => {
    const movieId = route.params.movieId;
    const [movieInfo, setMovieInfo] = useState();
    const [loaded, setLoaded] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        getMovie(movieId).then(info => setMovieInfo(info));
        setLoaded(true);
    }, [])

    useEffect(() => {
        console.log(movieInfo);
    }, [movieInfo])


    const videoShown = () => {
        setModalVisible(!modalVisible);
    }

    return (
        <>
        {loaded ?
            <>
            <ScrollView>
                <Image
                style={styles.image}
                resizeMode="cover"
                source={movieInfo ? {uri: `https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`} : placeholderImage}
                />
                <View style={styles.container}>
                    <View style={styles.playButton}>
                        <PlayButton handlePress={videoShown} />
                    </View>
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
                <Modal supportedOrientations={['portrait','landscape']} animationType='fade' visible={modalVisible}>
                    <View style={styles.videoModal}>
                        <Video videoFunction={videoShown} />
                    </View>
                </Modal>
            </>
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
    },
    playButton: {
        position: 'absolute',
        top: -20,
        right: 20
    },
    videoModal: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center"
    }
})

export default Details;