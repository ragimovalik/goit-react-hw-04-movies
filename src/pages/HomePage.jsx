import { useState, useEffect } from 'react';
import fetchQueryHandler from '../service/servisApi';
import Container from '../components/Container';
import Pagination from '../components/Pagination';
import FilmsList from '../components/FilmsList/FilmsList';

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  let [pageNumber, setPageNumber] = useState(1);

  const queryOptions = {
    keyWord: '',
    pageNumber,
    value: '',
  };

  useEffect(() => {
    setPageNumber(1);
    setFilms([]);

    queryOptions.keyWord = 'trend';

    fetchQueryHandler(queryOptions).then(films => {
      setFilms(films.results);
      setTotalPages(films.total_pages);
    });
  }, []); // eslint-disable-line

  useEffect(() => {
    queryOptions.keyWord = 'nPage';

    fetchQueryHandler(queryOptions).then(films => {
      setFilms(films.results);
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
        <FilmsList films={films} />
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
