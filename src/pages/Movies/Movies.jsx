import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchGetMovies } from 'services/servicesApi';
import { MovieList } from '../../components/MovieList/MovieList';
import { Searchbar } from '../../components/SearchBar/SearchBar';
import { Container } from './Movies.styles';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useSearchParams();

  useEffect(() => {
    const query = searchQuery.get('query') ?? '';
    async function getFilmsByName() {
      try {
        const filmsByName = await fetchGetMovies(query);
        setMovies(filmsByName);
      } catch (error) {
        console.log(error);
      }
    }
    getFilmsByName();
  }, [searchQuery]);

  function handleSearchInput(query) {
    const nextQuery = query !== '' ? { query } : {};
    setSearchQuery(nextQuery);
  }

  return (
    <Container>
      <Searchbar handleSearchInput={handleSearchInput}></Searchbar>
      <MovieList movies={movies} />
    </Container>
  );
}
