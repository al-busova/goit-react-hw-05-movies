import { getMovieCast } from 'MovieApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  CastList,
  CastItem,
  CastDescrItem,
  CastImg,
  CastNoImag,
} from './Cast.styled';
export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    getMovieCast(movieId).then(data => {
      setCast(data.cast);
    });
  }, [movieId]);

  return (
    <Container>
      {cast && (
        <CastList>
          {cast.map(hero => (
            <CastItem key={hero.cast_id}>
              {hero.profile_path ? (
                <CastImg
                  src={`https://image.tmdb.org/t/p/w500/${hero.profile_path}`}
                  alt=""
                />
              ) : (
                <CastNoImag><p>No image</p></CastNoImag>
              )}
              <CastDescrItem>
                <h4>{hero.name}</h4>
                <p>Character: {hero.character}</p>
              </CastDescrItem>
            </CastItem>
          ))}
        </CastList>
      )}
    </Container>
  );
};
