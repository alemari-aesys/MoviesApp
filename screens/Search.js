import React, { useState, useEffect } from 'react';
import { Dimensions, SafeAreaView, Text, View, TextInput, StyleSheet, Image, ScrollView, Button } from 'react-native'; 
import { searchMovieOrTv, getMovie } from '../services/services';
import StarRating from "react-native-star-rating";

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;


const Search = ({ route }) => {
    const [text, onChangeText] = useState('');
    const [searchResults, setSearchResults] = useState();
    const [movieInfo, setMovieInfo] = useState();


    const handlePress = (query) => {
        searchMovieOrTv(query, 'movie').then(data => {
            setSearchResults(data);
            console.log(JSON.stringify(data, "", 2));
        })
        .catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        searchResults &&
        getMovie(searchResults[0].id).then(movie => {
            setMovieInfo(movie)
        })
        .catch(err => console.log(err))
    }, [searchResults])

    // const test = route.params.test
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.lookFor}>
                    <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    placeholder={'Type something to look for...'}
                    value={text}
                    />
                    <View style={{width: 150, height: 50, marginTop: 10}}>
                        <Button onPress={() => {handlePress(text)}} title='Search'/>
                    </View>
                </View>
                <View style={styles.results}>
                    {searchResults && <Text style={{fontWeight: 'bold'}}>{searchResults[0].original_title}</Text>}
                    {searchResults && <Image style={styles.imm} source={{uri: `https://image.tmdb.org/t/p/w500${searchResults[0].poster_path}`}}/>}
                    {searchResults && <Text style={{flex: 1, flexWrap: 'wrap', width: 350}}>{searchResults[0].overview}</Text>}
                    {searchResults && <Text style={styles.release}>RELEASE DATE: {searchResults[0].release_date}</Text>}
                </View>
                <View>
                {movieInfo && <Text style={{fontWeight: 'bold', textAlign: 'center'}}>GENRES: </Text>}
                </View>
                <View style={styles.genresContainer}>
                {movieInfo && movieInfo.genres.map((g) => {
                        return <Text style={styles.genre}>{g.name}</Text>
                    })}
                </View>
                <View style={styles.rating}>
                {movieInfo && <StarRating fullStarColor={'gold'} disabled={true} maxStars={5} rating={movieInfo.vote_average/2} />}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    rating: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    lookFor: {
        paddingLeft: 10,
        paddingRight: 10
    },
    release: {
        marginTop: 10,
        fontWeight: 'bold'
    },
    genre: {
        marginRight: 10,
        fontWeight: 'bold'
    },
    genresContainer: {
        flexDirection: 'row',
        justifyContent: "center"
    },
    results: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
      height: 40,
      borderWidth: 1,
      padding: 10,
      marginTop: 50
    },
    imm: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        marginTop: 10,
        marginBottom: 10
    }
  });

export default Search;