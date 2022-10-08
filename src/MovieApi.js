const API_KEY = '2a346d14c42845024a685bb3b4347d0a';
const BASE_URL = 'https://api.themoviedb.org/3';

const POPULAR_URL = `${BASE_URL}/trending/movie/day`;
const SEARCH_URL = `${BASE_URL}/search/movie`;
const MOVIE_ID_URL = `${BASE_URL}/movie/`;

export function getPopularMovies(page) {
  return fetch(`${POPULAR_URL}?api_key=${API_KEY}&page=${page}`).then(response =>
    response.json()
  ).then(data => data.results);
}

export function getSearchMovies(query, page) {
  return fetch(
    `${SEARCH_URL}?api_key=${API_KEY}&query=${query}&page=${page}`
  ).then(respons => respons.json()).then(data => data.results);
}

export function getMovieById(id) {
  return fetch(`${MOVIE_ID_URL}${id}?api_key=${API_KEY}`).then(response =>
    response.json()
  );
}
export function getMovieCast(id) {
  return fetch(`${MOVIE_ID_URL}${id}/credits?api_key=${API_KEY}`).then(response =>
    response.json()
  );
}
export function getMovieReviews(id) {
  return fetch(`${MOVIE_ID_URL}${id}/reviews?api_key=${API_KEY}`).then(response =>
    response.json()
  ).then(data => data.results);
}