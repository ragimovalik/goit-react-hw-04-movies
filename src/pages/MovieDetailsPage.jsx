import { useState, useEffect } from 'react';
import fetchQueryHandler from '../service/servisApi';
import { useParams } from 'react-router-dom';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';
import FilmCard from '../components/FilmCard';
import Container from '../components/Container';
import Button from '../components/Button';

const MovieDetailsPage = () => {
  const [filmInfo, setFilmInfo] = useState();
  const [cast, setCast] = useState({
    cast: [],
    crew: [],
  });
  const [reviews, setReviews] = useState([]);
  const params = useParams();

  const queryOptions = {
    keyWord: '',
    pageNumber: 1,
    value: '',
  };

  useEffect(() => {
    queryOptions.keyWord = 'info';
    queryOptions.value = params.movieId;
    setCast({ cast: [], crew: [] });
    setReviews([]);

    fetchQueryHandler(queryOptions)
      .then(filmInfo => {
        setFilmInfo(filmInfo);
      })
      .catch(error => console.log('Something gone wrong', error));
  }, []); //eslint-disable-line

  const getCast = () => {
    queryOptions.keyWord = 'cast';
    queryOptions.value = params.movieId;

    fetchQueryHandler(queryOptions)
      .then(cast => {
        setCast(cast);
        setReviews([]);
      })
      .catch(error => console.log('Something gone wrong', error));
  };

  const getReviews = () => {
    queryOptions.keyWord = 'review';
    queryOptions.value = params.movieId;

    fetchQueryHandler(queryOptions)
      .then(reviews => {
        setReviews(reviews.results);
        setCast({ cast: [], crew: [] });
      })
      .catch(error => console.log('Something gone wrong', error));
  };

  return (
    <>
      <Container>{filmInfo && <FilmCard filmInfo={filmInfo} />}</Container>
      <Container>
        <Button btnText={'Cast'} onClick={getCast} />
        <Button btnText={'Reviews'} onClick={getReviews} />
      </Container>

      <Container>
        <Cast cast={cast} />
      </Container>

      <Container>
        <Reviews reviews={reviews} />
      </Container>
    </>
  );
};

export default MovieDetailsPage;
