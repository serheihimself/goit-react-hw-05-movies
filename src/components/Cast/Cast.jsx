import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchGetCast } from 'services/servicesApi';
import PropTypes from 'prop-types';

import {
  CastList,
  Actor,
  ActorPhoto,
  ActorName,
  Character,
} from './Cast.styles';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function getMovieCast() {
      try {
        const movieCast = await fetchGetCast(movieId);
        setCast(movieCast);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieCast();
  }, [movieId]);

  return (
    <CastList>
      {cast.map(({ id, profile_path, name, character }) => (
        <Actor key={id}>
          <ActorPhoto
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w300${profile_path}`
                : `https://via.placeholder.com/160x240`
            }
            alt={name}
          />
          <ActorName>{name}</ActorName>
          <Character>Character:</Character>
          <Character>{character}</Character>
        </Actor>
      ))}
    </CastList>
  );
}

Cast.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
