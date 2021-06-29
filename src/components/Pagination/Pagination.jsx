import PropTypes from 'prop-types';
import styles from './Pagination.module.css';

const Pagination = ({
  pageNumber,
  totalPages,
  onFirstPage,
  onDecrement,
  onIncrement,
}) => {
  return (
    <div className={styles.Pagination}>
      <button
        className={styles.Pagination__btn}
        title="To first page"
        type="button"
        onClick={onFirstPage}
      >
        To 1
      </button>

      <button
        className={styles.Pagination__btn}
        disabled={pageNumber === 1}
        title="To previous page"
        type="button"
        onClick={onDecrement}
      >
        Prev
      </button>
      <span title="Current page" className={styles.Pagination__screen}>
        {pageNumber}
      </span>

      <button
        className={styles.Pagination__btn}
        disabled={pageNumber >= totalPages}
        type="button"
        title="To next page"
        onClick={onIncrement}
      >
        Next
      </button>
      <span title="Total pages" className={styles.Pagination__screen}>
        {totalPages}
      </span>
    </div>
  );
};

Pagination.defaultProps = {
  pageNumber: 1,
  totalPages: 1,
};

Pagination.propTypes = {
  pageNumber: PropTypes.number,
  totalPages: PropTypes.number,
  onFirstPage: PropTypes.func,
  onDecrement: PropTypes.func,
  onIncrement: PropTypes.func,
};

export default Pagination;
