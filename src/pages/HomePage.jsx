import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fetchQueryHandler from '../service/servisApi';
import Pagination from '../components/Pagination';
// import styles from './HomePage.module.css';

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  let [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    setPageNumber(1);

    fetchQueryHandler('trend').then(data => {
      console.log(data);
      setFilms(data.results);
      setTotalPages(data.total_pages);
    });
  }, []);

  useEffect(() => {
    fetchQueryHandler('nPage', pageNumber).then(console.log);
  }, [pageNumber]);

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
      <ul>
        {films.map(film => (
          <li key={film.id}>
            <Link to={{ pathname: `movies/${film.id}` }}>{film.title}</Link>
          </li>
        ))}
      </ul>

      <Pagination
        totalPages={totalPages}
        pageNumber={pageNumber}
        onFirstPage={getFirstPage}
        onDecrement={getPreviousPage}
        onIncrement={getNextPage}
      />
    </>
  );
};

export default HomePage;

/*
 <>
      {theSearch && (
        <ul>
          {theSearch.map(film => (
            <li key={film.id}>
              <Link
                to={{
                  pathname: `${pathname}/${film.id}`,
                  state: { theSearch },
                }}
              >
                <h4>{film.title}</h4>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
*/
