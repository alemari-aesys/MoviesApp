import axios from "axios";
import apikey from "../apikey";

const key = apikey;
const apiUrl = "https://api.themoviedb.org/3";

  
  export const getPopularMovies = async() => {
    const resp = await axios.get(`${apiUrl}/movie/popular?api_key=${key}`)
    
    return resp.data.results;
  }

  export const getUpcomingMovies = async() => {
    const resp = await axios.get(`${apiUrl}/movie/upcoming/?api_key=${key}`)
    return resp.data.results;
  }

  export const getPopularTv = async() => {
    const resp = await axios.get(`${apiUrl}/tv/popular?api_key=${key}`)
    return resp.data.results;
  }

  export const getFamilyMovies = async() => {
    const resp = await axios.get(`${apiUrl}/discover/movie?api_key=${key}&with_genres=10751`)
    return resp.data.results;
  }

  export const getDocumentaryMovies = async() => {
    const resp = await axios.get(`${apiUrl}/discover/movie?api_key=${key}&with_genres=99`)
    return resp.data.results;
  }

  export const getMovie = async(id) => {
    const resp = await axios.get(`${apiUrl}/movie/${id}?api_key=${key}`)
    return resp.data;
  }