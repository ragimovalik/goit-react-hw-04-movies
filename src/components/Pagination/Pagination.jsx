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
      <button type="button" onClick={onFirstPage}>
        To 1
      </button>
      <button disabled={pageNumber === 1} type="button" onClick={onDecrement}>
        Prev
      </button>
      <p>{pageNumber}</p>
      <button
        disabled={pageNumber >= totalPages}
        type="button"
        onClick={onIncrement}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
