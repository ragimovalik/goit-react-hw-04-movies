import { useState, useEffect } from 'react';
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

  const queryOptions = {
    keyWord: '',
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
    queryOptions.keyWord = 'query';

    queriedWord.length >= 2 && getQueriedFilms();
  }, [pageNumber]); // eslint-disable-line

  const getQueriedFilms = () => {
    queryOptions.keyWord = 'query';

    fetchQueryHandler(queryOptions)
      .then(films => {
        console.log(films);
        setSearchingResult(films.results);
        setTotalPages(films.total_pages);
      })
      .catch(error => 'Something gone wrong');
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
        {searchingResult && <FilmsList films={searchingResult} />}
      </Container>

      <Container>
        {searchingResult && (
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
