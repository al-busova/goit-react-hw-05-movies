import { useState, useEffect } from "react";
import { getMovieById } from "MovieApi";
import { Container } from "./MovieCard.styled";

export const MovieCard = ({id}) => {
  const [movie, setMovie] = useState(null);

    useEffect(() => {
    getMovieById(id).then(data => {
    setMovie(data);
  });
    }, [id]);
 
  return (
    (movie &&  <Container >
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" height='350'/>
      <div>
        <h2>
          {movie.title} ({movie.release_date.substr(0, 4)})
        </h2>
        <p>User Score: {(movie.vote_average * 10).toFixed(0)} %</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <p>{movie.genres.map(genre => (<span key={genre.id}>{genre.name} </span>) )}</p>
      </div>
    </Container>)
   
  );
};
