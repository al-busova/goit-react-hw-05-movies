import { getMovieCast } from "MovieApi";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "components/Box";
export const Cast = () => {
    const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  
    useEffect(() => {
    getMovieCast(movieId).then(data => {
      setCast(data.cast);
  });
    }, [movieId]);
 
  return (
     <Box color= 'accent' mr = 'auto' ml='auto' width ='50%' fontSize ='s' textAlign ='center'>
      {cast && <ul>
        {cast.map(hero => (
          <li key={hero.id}>
           (hero.profile_path ? <img src={`https://image.tmdb.org/t/p/w500/${hero.profile_path}`} alt="" height='150'/> : <div></div> ) 
            <p>{ hero.name}</p>
            <p>Character: {hero.character}</p>
          </li>
        ))}
      </ul>}
      
    </Box>
  );
};