import styles from './Reviews.module.css';

const Reviews = ({ reviews }) => {
  return (
    <>
      <ul className={styles.Reviews}>
        {reviews &&
          reviews.map(review => (
            <li key={review.id} className={styles.Review}>
              <h4 className={styles.Review__author}>{review.author}</h4>
              <p className={styles.Review__text}>{review.content}</p>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Reviews;
