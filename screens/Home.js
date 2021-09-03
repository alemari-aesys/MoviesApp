import React from 'react';
import { ActivityIndicator, Text, View, StyleSheet, Dimensions, ScrollView} from 'react-native';
import { useState, useEffect } from 'react';
import { getPopularMovies, getUpcomingMovies, getPopularTv, getFamilyMovies, getDocumentaryMovies } from '../services/services';
import { SliderBox } from "react-native-image-slider-box";
import List from '../Components/List';
import Error from '../Components/Error';

const dimensions = Dimensions.get('screen');

const Home = ({ navigation }) => {
    const [moviesImages, setMoviesImages] = useState([]);
    const [popularMovies, setPopularMovies] = useState();
    const [popularTv, setPopularTv] = useState();
    const [familyMovies, setFamilyMovies] = useState();
    const [documentaryMovies, setDocumentaryMovies] = useState();

    const [error, setError] = useState(false);
    const [loaded, setLoaded] = useState(false);

    const getData = () => {
        return Promise.all([
            getUpcomingMovies(), 
            getPopularMovies(), 
            getPopularTv(), 
            getFamilyMovies(), 
            getDocumentaryMovies()])
    }

    useEffect(() => {

        getData().then(([
            upcomingMoviesData, 
            popularMoviesData, 
            popularTvData, 
            familyMoviesData, 
            documentaryMoviesData]) => {
                const moviesImagesArray = upcomingMoviesData.map((x) => {
                    return `https://image.tmdb.org/t/p/w500${x.poster_path}`;
                })
                setMoviesImages(moviesImagesArray);
                setPopularMovies(popularMoviesData);
                setPopularTv(popularTvData)
                setFamilyMovies(familyMoviesData)
                setDocumentaryMovies(documentaryMoviesData);
                setLoaded(true);
            })
            .catch(() => {
                setError(true);
            })
            .finally(() => {
                setLoaded(true);
            })
    }, [])

    return (
        <>
        {loaded && !error ? 
        <ScrollView>
          {moviesImages && 
          <View style={styles.sliderContainer}>
            <SliderBox 
                images={moviesImages}
                dotStyle={styles.sliderStyle}
                sliderBoxHeight={dimensions.height / 1.5} 
                autoplay={true} 
                circleLoop={true} 
            />
          </View>}
          {popularMovies &&
          <View style={styles.carousel}>
              <List 
              navigation={navigation}
              title="Popular movies" 
              content={popularMovies} />
          </View>}
          {popularTv && 
          <View style={styles.carousel}>
              <List 
              navigation={navigation}
              title="Popular Tv Series" 
              content={popularTv} />
          </View>}
            {familyMovies && 
            <View style={styles.carousel}>
              <List 
              navigation={navigation}
              title="Family Movies" 
              content={familyMovies} />
          </View>}
          {documentaryMovies && 
          <View style={styles.carousel}>
              <List 
              navigation={navigation}
              title="Documentary Movies" 
              content={documentaryMovies} />
          </View>}
          <View>
              <Text></Text>
          </View>
        </ScrollView> : <ActivityIndicator size='large' color='blue'/>}
        {error && <Error errorText1={"Oops, something went wrong"} errorText2={"Make sure you're online"} />}
        </>
    );
}

const styles = StyleSheet.create({
    sliderContainer: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center"
    },
    carousel: {
        flex: 1, 
        justifyContent: "center"
    },
    sliderStyle: {
        height: 0
    }
})

export default Home;