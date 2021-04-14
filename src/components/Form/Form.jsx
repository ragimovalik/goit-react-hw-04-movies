import React, { Component } from 'react';
import InputBox from '../InputBox/InputBox';
import PropTypes from 'prop-types';
import styles from './Form.module.css';

class Form extends Component {
  state = { name: '' };

  setDefaultState = () =>
    this.setState({
      name: '',
    });

  onChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.setDefaultState();
  };

  render() {
    return (
      <form className={styles.Form} onSubmit={this.handleSubmit}>
        <InputBox
          labelText={'Name'}
          htmlFor={'name'}
          type={'text'}
          id={'name'}
          name={'name'}
          title={
            "Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          }
          pattern={'text'}
          placeholder={'Name'}
          required={true}
          value={this.state.name}
          onChange={this.onChange}
        />

        <input className={styles.Form__btn} type="submit" value="Submit" />
      </form>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
