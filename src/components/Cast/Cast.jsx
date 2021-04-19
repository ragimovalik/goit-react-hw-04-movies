// import { BsCardImage } from 'react-icons/bs';
import styles from './Cast.module.css';

const Cast = ({ cast: { cast, crew } }) => (
  <div className={styles.Cast}>
    {cast.length ? <h3 className={styles.Cast__block}>Cast</h3> : null}
    <ul className={styles.Castlist}>
      {cast.map(actor => (
        <li className={styles.Castlist__item} key={actor.id}>
          <div>
            {actor.profile_path ? (
              <img
                className={styles.Castlist__image}
                src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                alt={actor.name}
              />
            ) : (
              <span className={styles.Castlist__image}>No image available</span>
            )}
            <p className={styles.Castlist__name}> {actor.name}</p>
            <p className={styles.Castlist__character}>{actor.character}</p>
          </div>
        </li>
      ))}
    </ul>
    {crew.length ? <h3 className={styles.Cast__block}>Crew</h3> : null}
    <ul className={styles.Castlist}>
      {crew.map(crew => (
        <li className={styles.Castlist__item} key={crew.credit_id}>
          <div>
            {crew.profile_path ? (
              <img
                className={styles.Castlist__image}
                src={`https://image.tmdb.org/t/p/w300${crew.profile_path}`}
                alt={crew.name}
              />
            ) : (
              <span className={styles.Castlist__image}>No image available</span>

              // <BsCardImage className={styles.Cast__defaultimage} />
            )}
            <p className={styles.Castlist__name}>{crew.name}</p>
            <p className={styles.Castlist__character}>{crew.job}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default Cast;
