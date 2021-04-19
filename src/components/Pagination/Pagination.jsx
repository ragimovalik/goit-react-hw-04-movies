import styles from './Pagination.module.css';

const Pagination = ({
  pageNumber = 1,
  totalPages = 1,
  onFirstPage,
  onDecrement,
  onIncrement,
}) => {
  return (
    <div className={styles.Pagination}>
      <button
        className={styles.Pagination__btn}
        type="button"
        onClick={onFirstPage}
      >
        To 1
      </button>

      <button
        className={styles.Pagination__btn}
        disabled={pageNumber === 1}
        type="button"
        onClick={onDecrement}
      >
        Prev
      </button>
      <span className={styles.Pagination__screen}>{pageNumber}</span>

      <button
        className={styles.Pagination__btn}
        disabled={pageNumber >= totalPages}
        type="button"
        onClick={onIncrement}
      >
        Next
      </button>
      <span className={styles.Pagination__screen}>{totalPages}</span>
    </div>
  );
};

export default Pagination;
