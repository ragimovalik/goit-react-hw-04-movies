import { Link } from 'react-router-dom';
// import FilmCard from '../FilmCard';
import styles from './FilmsList.module.css';

const FilmsList = ({ films, queriedWord }) => {
  return (
    <ul className={styles.Filmslist}>
      {films.map(({ id, title }) => (
        <li className={styles.Filmslist__item} key={id}>
          <Link
            to={{
              pathname: `movies/${id}`,
            }}
          >
            <h4 className={styles.Filmslist__title}>{title}</h4>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FilmsList;

/*
<FilmCard />
*/
