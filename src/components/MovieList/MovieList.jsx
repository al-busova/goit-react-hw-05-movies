import {useLocation } from "react-router-dom";
import { MoviesList, MovieItem, Link, MovieTitle } from "./MovieList.style";

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