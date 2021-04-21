import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './FilmsList.module.css';

const FilmsList = ({ films, pageNumber }) => {
  const { pathname } = useLocation();

  return (
    <ul className={styles.Filmslist}>
      {films.map(({ id, title }) => (
        <li className={styles.Filmslist__item} key={id}>
          <Link
            to={{
              pathname: `movies/${id}`,
              state: { pathname, state: pageNumber },
            }}
          >
            <h4 className={styles.Filmslist__title}>{title}</h4>
          </Link>
        </li>
      ))}
    </ul>
  );
};

FilmsList.propTypes = {
  films: PropTypes.array,
};

export default FilmsList;
