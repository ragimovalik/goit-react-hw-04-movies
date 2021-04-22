import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import fetchQueryHandler from '../service/servisApi';
import Container from '../components/Container';
import Pagination from '../components/Pagination';
import FilmsList from '../components/FilmsList/FilmsList';

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  let [pageNumber, setPageNumber] = useState();

  const { location } = useHistory();

  const queryOptions = {
    keyWord: 'trend',
    pageNumber,
    value: '',
  };

  useEffect(() => {
    location?.pageNumber
      ? setPageNumber(location.pageNumber)
      : setPageNumber(1);
  }, []); // eslint-disable-line

  useEffect(() => {
    queryOptions.keyWord = 'nPage';
    setFilms([]);

    fetchQueryHandler(queryOptions).then(films => {
      setFilms(films.results);
      setTotalPages(films.total_pages);
    });
  }, [pageNumber]); // eslint-disable-line

  const getNextPage = () => {
    setPageNumber(++pageNumber);
  };

  const getPreviousPage = () => {
    setPageNumber(--pageNumber);
  };

  const getFirstPage = () => {
    setPageNumber(1);
  };

  return (
    <>
      <Container>
        <FilmsList films={films} pageNumber={pageNumber} />
      </Container>

      <Container>
        <Pagination
          totalPages={totalPages}
          pageNumber={pageNumber}
          onFirstPage={getFirstPage}
          onDecrement={getPreviousPage}
          onIncrement={getNextPage}
        />
      </Container>
    </>
  );
};

export default HomePage;
