// import { Link } from "react-router-dom";
import { MoviesList, MovieItem, LinkS, MovieTitle } from "./MovieList.style";
export const MovieList = ({ movies }) => {
  return (
    <>
      {movies && <MoviesList>
        {movies.map(movie => (
          <MovieItem key={movie.id}>
            <LinkS to={`/movies/${movie.id}`}><MovieTitle>{movie.title}</MovieTitle></LinkS>
          </MovieItem>
        ))}
      </MoviesList>}
    </>

  );
};