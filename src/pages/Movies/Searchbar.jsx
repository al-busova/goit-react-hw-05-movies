import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { HiSearch } from 'react-icons/hi';
import {
  HeaderSearch,
  FormSearch,
  FormSearchBtn,
  FormInput,
} from './Searchbar.styled';
import { toast } from 'react-toastify'; 

export const Searchbar = ({onSubmit, query }) => {
  const [searchMovie, setSearchMovie] = useState('');

  useEffect(() => {
      if (query !== '') {
        setSearchMovie(query);
    }
  }, [query]);

 const handleSearchNameChange = event => {
   setSearchMovie(event.currentTarget.value.toLowerCase());
  };

 const handleSubmit = e => {
   e.preventDefault();
   if (searchMovie.trim() === '') {
     onSubmit(searchMovie);
    return toast('Please, enter query.');
   }
    onSubmit(searchMovie);
  }

    return (
      <HeaderSearch>
        <FormSearch onSubmit={handleSubmit} >
          <FormSearchBtn type="submit">
         <HiSearch/>
          </FormSearchBtn>
          <FormInput
            type="text"
            value={searchMovie}
            autocomplete="off"
            placeholder="Search movie"
            onChange={handleSearchNameChange}
          />
        </FormSearch>
      </HeaderSearch>
    );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};