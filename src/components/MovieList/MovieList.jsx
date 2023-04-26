import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { FilmsList, LinkStyled } from './MovieList.styles';

export function MovieList({ movies, linkTo }) {
  const location = useLocation();

  return (
    <FilmsList>
      {movies.map(({ title, id }) => (
        <li key={id}>
          <LinkStyled to={`${linkTo ?? ''}${id}`} state={{ from: location }}>
            {title}
          </LinkStyled>
        </li>
      ))}
    </FilmsList>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
  linkTo: PropTypes.string,
};
