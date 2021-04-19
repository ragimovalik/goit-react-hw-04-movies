import styles from './FilmCard.module.css';

const FilmCard = ({ filmInfo }) => {
  return (
    <div className={styles.FilmCard}>
      <div className={styles.FilmCard__imagebox}>
        <img
          className={styles.FilmCard__image}
          src={`https://image.tmdb.org/t/p/w500${filmInfo.backdrop_path}`}
          alt={filmInfo.overview}
          title={filmInfo.tagline}
        />
      </div>
      <h4 className={styles.FilmCard__title}>{filmInfo.title}</h4>
      <p className={styles.FilmCard__runtime}>
        Runtime: {filmInfo.runtime} mins.
      </p>
      <p className={styles.FilmCard__description}>
        Overview: {filmInfo.overview}
      </p>
    </div>
  );
};

export default FilmCard;
