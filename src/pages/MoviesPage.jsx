import { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import Form from '../components/Form';
import fetchQueryHandler from '../service/servisApi';

const MoviesPage = props => {
  const location = useLocation();
  const { pathname, state, search } = location;
  // const initialQueryState = ''; //parse(search)

  const { push } = useHistory();
  const [theSearch, setTheSearch] = useState(state?.theSearch || '');

  const submitHandler = text =>
    fetchQueryHandler('query', text)
      .then(data => {
        console.log(data);
        setTheSearch(data.results);
        push({
          ...location,
          // search,
        });
      })
      .catch(error => 'Something gone wrong');

  return (
    <>
      <Form onSubmit={submitHandler} />
      {theSearch && (
        <ul>
          {theSearch.map(film => (
            <li key={film.id}>
              <Link
                to={{
                  // pathname: `${props.match.url}/${film.id}`,
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
  );
};

export default MoviesPage;
