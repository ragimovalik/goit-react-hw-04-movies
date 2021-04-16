import PropTypes from 'prop-types';
import styles from './InputBox.module.css';

const InputBox = ({
  htmlFor,
  type,
  id,
  name,
  title,
  placeholder,
  required,
  value,
  labelText,
  onChange,
}) => {
  return (
    <div className={styles.Form__wrap}>
      <label htmlFor={htmlFor} className={styles.Form__label}>
        <span>{labelText}</span>
      </label>

      <input
        className={styles.Form__input}
        type={type}
        id={id}
        name={name}
        title={title}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

InputBox.defaultProps = {
  title: 'Please enter some text',
  required: true,
  labelText: 'Label for -->',
};

InputBox.propTypes = {
  htmlFor: PropTypes.string,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  labelText: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}.isRequired;

export default InputBox;
