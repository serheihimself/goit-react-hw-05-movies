import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchGetReviews } from 'services/servicesApi';
import { ReviewList } from './Reviews.styles';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getMovieReviews() {
      try {
        const movieCast = await fetchGetReviews(movieId);
        setReviews(movieCast);
      } catch (error) {
        console.log('error :>> ', error);
      }
    }
    getMovieReviews();
  }, [movieId]);

  return (
    <div>
      {!reviews.length ? (
        <p>We don`t have any reviews for this movie</p>
      ) : (
        <ReviewList>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ReviewList>
      )}
    </div>
  );
}

Reviews.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
