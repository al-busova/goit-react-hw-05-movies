// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from 'react';
import { getPopularMovies } from 'MovieApi';
import { MovieList } from 'components/MovieList/MovieList';
import { HomeTitle } from 'pages/pages.styled';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies(1).then(data => data.results).then(movies => {
        setMovies(movies);
      });
    }, []);

  return (
    <main>
      <HomeTitle>Trending today</HomeTitle>
      <MovieList movies={movies} />
    </main>
  );
};
