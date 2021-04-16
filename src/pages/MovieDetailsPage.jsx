import { useState, useEffect } from 'react';
import fetchQueryHandler from '../service/servisApi';
import { useParams } from 'react-router-dom';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';

const MovieDetailsPage = props => {
  const params = useParams();
  const [filmInfo, setFilmInfo] = useState();
  const [cast, setCast] = useState({
    cast: [],
    crew: [],
  });
  const [reviews, setReviews] = useState();

  useEffect(() => {
    fetchQueryHandler('info', params.movieId)
      .then(filmInfo => {
        setFilmInfo(filmInfo);
      })
      .catch(error => console.log('Something gone wrong', error));
  }, []); //eslint-disable-line

  const getCast = () => {
    fetchQueryHandler('cast', params.movieId)
      .then(cast => {
        console.log(cast);
        setCast(cast);
      })
      .catch(error => console.log('Something gone wrong', error));
  };

  const getReviews = () => {
    fetchQueryHandler('review', params.movieId).then(reviews => {
      console.log(reviews.results);
      setReviews(reviews.results);
    });
  };

  return (
    <>
      <h4>Страница одного фильма {params.movieId}</h4>
      <div>
        {filmInfo && (
          <div>
            <h4>{filmInfo.title}</h4>
            <p>Runtime: {filmInfo.runtime} mins.</p>
            <p>Overview: {filmInfo.overview}</p>
            <img
              src={`https://image.tmdb.org/t/p/w300${filmInfo.backdrop_path}`}
              alt={filmInfo.overview}
              title={filmInfo.tagline}
            />
          </div>
        )}
        <button
          onClick={() =>
            props.history.push({
              pathname: '/movies',
              state: props.history.location.state,
            })
          }
        >
          Go back
        </button>
      </div>
      <div>
        <button onClick={getCast}>Cast</button>
        <button onClick={getReviews}>Reviews</button>
      </div>

      <div>
        <Cast cast={cast} />
      </div>

      <div>
        <Reviews reviews={reviews} />
      </div>
    </>
  );
};

export default MovieDetailsPage;
