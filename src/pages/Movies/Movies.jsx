import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Searchbar } from "./Searchbar";
import { MovieList } from 'components/MovieList/MovieList';
import { Container } from 'pages/pages.styled';
import { getSearchMovies } from 'MovieApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

    useEffect(() => {
      if (query === '') {
         setMovies([]);
      return;
    }
 
      getSearchMovies(query, 1).then(data => data.results)
        .then(movies => {
          setMovies([...movies])
        }).catch(error => setError(error.message));
  }, [query]);

  const handleFormSubmit = queryMovie => {
  setSearchParams(queryMovie.trim() !== "" ? { query: queryMovie } : {} );
  };

 const visibleMovies = movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()));

 return (
    <main>
     <Searchbar onSubmit={handleFormSubmit} />
      {error && toast.error(error)}
     {visibleMovies.length > 0 ? (
       <Container><MovieList movies={visibleMovies}></MovieList></Container>    
      ) : (
            <p>
              Please, enter query movie.
            </p>
      )}
      <ToastContainer autoClose={3000} />
    </main>
  );
};

export default Movies;