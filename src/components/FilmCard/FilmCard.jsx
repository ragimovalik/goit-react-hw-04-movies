import PropTypes from 'prop-types';
import styles from './FilmCard.module.css';
import defaultImageSq from '../../assets/default_image-sq.jpg';
import { useHistory } from 'react-router-dom';

const FilmCard = ({
  filmInfo: { backdrop_path, overview, tagline, title, runtime },
}) => {
  const {
    push,
    location: { state },
  } = useHistory();

  const historyStateChecker = state ? state.pathname : '/';

  const toBackBtnHandler = () => push({ pathname: historyStateChecker, state });

  return (
    <div className={styles.FilmCard}>
      <div className={styles.FilmCard__imagebox}>
        <img
          className={styles.FilmCard__image}
          src={
            backdrop_path
              ? `https://image.tmdb.org/t/p/w500${backdrop_path}`
              : defaultImageSq
          }
          alt={overview}
          title={tagline}
        />
      </div>
      <h4 className={styles.FilmCard__title}>{title}</h4>
      <p className={styles.FilmCard__runtime}>Runtime: {runtime} mins.</p>
      <p className={styles.FilmCard__description}>Overview: {overview}</p>
      <button className={styles.overheadBtn} onClick={toBackBtnHandler}>
        BACK
      </button>
    </div>
  );
};

FilmCard.defaultProps = {
  backdrop_path: defaultImageSq,
  runtime: 0,
};

FilmCard.propTypes = {
  filmInfo: PropTypes.shape({
    backdrop_path: PropTypes.string,
    overview: PropTypes.string,
    tagline: PropTypes.string,
    title: PropTypes.string,
    runtime: PropTypes.number,
  }),
};

export default FilmCard;
