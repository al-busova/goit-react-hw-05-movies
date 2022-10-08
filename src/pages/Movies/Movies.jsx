import { useState, useEffect } from 'react';
import { Searchbar } from "./Searchbar";
import { MovieList } from 'components/MovieList/MovieList';
import { getSearchMovies } from 'MovieApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Movies = () => {
   const [searchMovie, setSearchMovie] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

    useEffect(() => {
    if (searchMovie === '') {
      return;
    }
 
      getSearchMovies(searchMovie, 1)
        .then(movies => {
          setMovies([...movies])
        }).catch(error => setError(error.message));
  }, [searchMovie]);

  const handleFormSubmit = searchImage => {
    if (searchMovie === searchImage) {
      return;
    } else {
      setSearchMovie(searchImage);
      setMovies([]);
    }
  };


 return (
    <main>
     <Searchbar onSubmit={handleFormSubmit} />
      {error && toast.error(error)}
     {movies.length > 0 ? (
       <section><MovieList movies={movies}></MovieList></section>
          
      ) : (
            <p>
              Please, enter query movie.
            </p>
      )}
      <ToastContainer autoClose={3000} />
    </main>
  );
};





export const App = () => {
 




 
};