import PropTypes from 'prop-types';
import styles from './Cast.module.css';
import defaultImage from '../../assets/default_image.jpg';

const Cast = ({ cast: { cast, crew } }) => (
  <div className={styles.Cast}>
    {cast.length ? <h3 className={styles.Cast__title}>Cast</h3> : null}
    <ul className={styles.Castlist}>
      {cast.map(({ id, profile_path, name, character }) => (
        <li className={styles.Castlist__item} key={id}>
          <div>
            <img
              className={styles.Castlist__image}
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w300${profile_path}`
                  : defaultImage
              }
              alt={name}
            />

            <p className={styles.Castlist__name}> {name}</p>
            <p className={styles.Castlist__character}>{character}</p>
          </div>
        </li>
      ))}
    </ul>

    {crew.length ? <h3 className={styles.Cast__title}>Crew</h3> : null}
    <ul className={styles.Castlist}>
      {crew.map(({ credit_id, profile_path, name, job }) => (
        <li className={styles.Castlist__item} key={credit_id}>
          <div>
            <img
              className={styles.Castlist__image}
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w300${profile_path}`
                  : defaultImage
              }
              alt={name}
            />
            <p className={styles.Castlist__name}>{name}</p>
            <p className={styles.Castlist__character}>{job}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

Cast.propTypes = {
  cast: PropTypes.shape({
    cast: PropTypes.arrayOf(PropTypes.object),
    crew: PropTypes.arrayOf(PropTypes.object),
  }),
};

export default Cast;
