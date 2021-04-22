import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Form from '../components/Form';
import fetchQueryHandler from '../service/servisApi';
import FilmsList from '../components/FilmsList/FilmsList';
import Pagination from '../components/Pagination';
import Container from '../components/Container';
// import queryString from 'query-string';

const MoviesPage = () => {
  const [searchingResult, setSearchingResult] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  let [pageNumber, setPageNumber] = useState(1);
  const [queriedWord, setQueriedWord] = useState('');

  const { location } = useHistory();

  const queryOptions = {
    keyWord: 'query',
    pageNumber,
    value: queriedWord,
  };

  const submitHandler = inputedText => {
    setTotalPages(1);
    setPageNumber(1);

    queryOptions.value = inputedText;
    setQueriedWord(inputedText);
    getQueriedFilms();
  };

  useEffect(() => {
    location?.queriedWord
      ? setQueriedWord(location.queriedWord)
      : setQueriedWord('');
  }, []); //eslint-disable-line

  useEffect(() => {
    queryOptions.keyWord = 'query';

    queriedWord.length >= 2 && getQueriedFilms();
  }, [pageNumber, queriedWord]); // eslint-disable-line

  const getQueriedFilms = () => {
    queryOptions.keyWord = 'query';

    fetchQueryHandler(queryOptions)
      .then(films => {
        setSearchingResult(films.results);
        setTotalPages(films.total_pages);
      })
      .catch(error => console.log('Something gone wrong', error));
  };

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
        <Form onSubmit={submitHandler} />
      </Container>

      <Container>
        {searchingResult && (
          <FilmsList
            films={searchingResult}
            pageNumber={pageNumber}
            queriedWord={queriedWord}
          />
        )}
      </Container>

      <Container>
        {searchingResult.length > 1 && (
          <Pagination
            totalPages={totalPages}
            pageNumber={pageNumber}
            onFirstPage={getFirstPage}
            onDecrement={getPreviousPage}
            onIncrement={getNextPage}
          />
        )}
      </Container>
    </>
  );
};

export default MoviesPage;
