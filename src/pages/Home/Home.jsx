import { useState, useEffect } from 'react';
import { fetchGetTrending } from 'services/servicesApi';
import { MovieList } from 'components/MovieList/MovieList';
import { Title } from './Home.styles';
import { Container } from 'pages/Movies/Movies.styles';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getTrendingFilms() {
      try {
        const trendingFilms = await fetchGetTrending();
        setMovies(trendingFilms);
      } catch (error) {
        console.log(error);
      }
    }
    getTrendingFilms();
  }, []);

  return (
    <Container>
      <Title>Trending today</Title>
      <MovieList movies={movies} linkTo="movies/" />
    </Container>
  );
}
