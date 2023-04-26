import { useEffect, useRef, useState, Suspense } from 'react';
import { useLocation, useParams, Link, Outlet } from 'react-router-dom';
import { fetchGetMoviesDetails } from 'services/servicesApi';
import { BackLink } from 'components/BackLink/BackLink';
import { LoadingPage } from 'components/LoadingPage/LoadingPage';
import { Section, MovieCard, Image, Meta, Title } from './MovieDetails.styles';
import { Container } from 'pages/Movies/Movies.styles';

export default function MovieDetails() {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  const { poster_path, title, vote_average, overview, release_date, genres } =
    movie;
  const year = new Date(release_date).getFullYear();

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const filmDetails = await fetchGetMoviesDetails(movieId);
        setMovie(filmDetails);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieDetails();
  }, [movieId]);

  return (
    <Container>
      <BackLink to={backLinkHref.current}>Go back</BackLink>
      <Section>
        <MovieCard>
          <Image
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w300/${poster_path}`
                : `https://via.placeholder.com/250x375`
            }
            alt={`${title}`}
          />
          <Meta>
            <Title>{`${title} (${year})`} </Title>
            <p>User Score: {`${Math.round(vote_average * 10)}`}%</p>
            <h3>Owerview</h3>
            <p>{`${overview}`}</p>
            <h3>Genres</h3>
            {genres && <p>{genres.map(({ name }) => name).join(' ')}</p>}
          </Meta>
        </MovieCard>
      </Section>
      <Section>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </Section>
      <Suspense fallback={<LoadingPage />}>
        <Section>
          <Outlet />
        </Section>
      </Suspense>
    </Container>
  );
}
