import { useState, useEffect } from 'react';
import fetchQueryHandler from '../service/servisApi';
import { useParams } from 'react-router-dom';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';
import FilmCard from '../components/FilmCard';
// import styles from './MovieDetailsPage.module.css';
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
        console.log(cast);
        setCast(cast);
        setReviews([]);
      })
      .catch(error => console.log('Something gone wrong', error));
  };

  const getReviews = () => {
    queryOptions.keyWord = 'review';
    queryOptions.value = params.movieId;

    fetchQueryHandler(queryOptions).then(reviews => {
      console.log(reviews.results);
      setReviews(reviews.results);
      setCast({ cast: [], crew: [] });
    });
  };

  return (
    <>
      <Container>{filmInfo && <FilmCard filmInfo={filmInfo} />}</Container>
      <Container>
        <Button btnText={'Cast'} onClick={getCast} />
        <Button btnText={'Reviews'} onClick={getReviews} />

        {/* <Button  onClick={getNewPictures} /> */}
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

/*
// const history = useHistory();
// const location = useLocation();

// const goBackHandler = () =>
//   history.push({ pathname: '/movies', state: state.films });


const { location, history } = this.props;

//     if (location.state && location.state.from) {
//       return history.push(location.state.from);
//  }

// history.push(routes.books);

history.push(location?.state?.from || routes.books);
*/
