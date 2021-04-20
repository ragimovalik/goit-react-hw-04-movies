// import { BsCardImage } from 'react-icons/bs';
import styles from './Cast.module.css';
import defaultImage from '../../assets/default_image.jpg';

const Cast = ({ cast: { cast, crew } }) => (
  <div className={styles.Cast}>
    {cast.length ? <h3 className={styles.Cast__title}>Cast</h3> : null}
    <ul className={styles.Castlist}>
      {cast.map(actor => (
        <li className={styles.Castlist__item} key={actor.id}>
          <div>
            <img
              className={styles.Castlist__image}
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                  : defaultImage
              }
              alt={actor.name}
            />

            <p className={styles.Castlist__name}> {actor.name}</p>
            <p className={styles.Castlist__character}>{actor.character}</p>
          </div>
        </li>
      ))}
    </ul>
    {crew.length ? <h3 className={styles.Cast__title}>Crew</h3> : null}
    <ul className={styles.Castlist}>
      {crew.map(crew => (
        <li className={styles.Castlist__item} key={crew.credit_id}>
          <div>
            <img
              className={styles.Castlist__image}
              src={
                crew.profile_path
                  ? `https://image.tmdb.org/t/p/w300${crew.profile_path}`
                  : defaultImage
              }
              alt={crew.name}
            />
            <p className={styles.Castlist__name}>{crew.name}</p>
            <p className={styles.Castlist__character}>{crew.job}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default Cast;
