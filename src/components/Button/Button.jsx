import styles from './Button.module.css';

const Button = ({ btnText, onClick }) => {
  return (
    <button className={styles.Button} onClick={onClick}>
      {btnText}
    </button>
  );
};

export default Button;
