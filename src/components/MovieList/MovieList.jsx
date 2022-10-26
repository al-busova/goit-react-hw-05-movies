import {useLocation } from "react-router-dom";
import { MoviesList, MovieItem, Link, MovieTitle } from "./MovieList.style";
import PropTypes from 'prop-types';

export const MovieList = ({ movies }) => {
   const location = useLocation();
  return (
    <>
      {movies && <MoviesList>
        {movies.map(movie => (
          <MovieItem key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{from:location}}><MovieTitle>{movie.title}</MovieTitle></Link>
          </MovieItem>
        ))}
      </MoviesList>}
    </>

  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};