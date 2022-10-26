import axios from 'axios';
const API_KEY = '2a346d14c42845024a685bb3b4347d0a';
const BASE_URL = 'https://api.themoviedb.org/3';

const POPULAR_URL = `${BASE_URL}/trending/movie/day`;
const SEARCH_URL = `${BASE_URL}/search/movie`;
const MOVIE_ID_URL = `${BASE_URL}/movie/`;

export const getPopularMovies = async page => {
  const response = await axios.get(
    `${POPULAR_URL}?api_key=${API_KEY}&page=${page}`
  );
  return response.data;
};

export const getSearchMovies = async (query, page) => {
  const response = await axios.get(
    `${SEARCH_URL}?api_key=${API_KEY}&query=${query}&page=${page}`
  );
  return response.data;
};

export const getMovieById = async id => {
  const response = await axios.get(`${MOVIE_ID_URL}${id}?api_key=${API_KEY}`);
  return response.data;
};
export const getMovieCast = async id => {
  const response = await axios.get(
    `${MOVIE_ID_URL}${id}/credits?api_key=${API_KEY}`
  );
  return response.data;
};
export const getMovieReviews = async id => {
  const response = await axios.get(
    `${MOVIE_ID_URL}${id}/reviews?api_key=${API_KEY}`
  );
  return response.data;
};
