import PropTypes from 'prop-types';
import styles from './Reviews.module.css';

const Reviews = ({ reviews }) => {
  return (
    <>
      <ul className={styles.Reviews}>
        {reviews &&
          reviews.map(({ id, author, content }) => (
            <li key={id} className={styles.Review}>
              <h4 className={styles.Review__author}>{author}</h4>
              <p className={styles.Review__text}>{content}</p>
            </li>
          ))}
      </ul>
    </>
  );
};

Reviews.defaultProps = {};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object),
};

export default Reviews;
