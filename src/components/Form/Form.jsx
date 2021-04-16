import React, { Component } from 'react';
import InputBox from '../InputBox/InputBox';
import PropTypes from 'prop-types';
import styles from './Form.module.css';

class Form extends Component {
  state = { inputedText: '' };

  setDefaultState = () =>
    this.setState({
      inputedText: '',
    });

  onChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.state.inputedText.length >= 2 &&
      this.props.onSubmit(this.state.inputedText);

    this.setDefaultState();
  };

  render() {
    return (
      <form className={styles.Form} onSubmit={this.handleSubmit}>
        <InputBox
          labelText={'Film'}
          htmlFor={'film'}
          type={'text'}
          id={'film'}
          name={'inputedText'}
          title={' '}
          placeholder={'Your query'}
          required={true}
          value={this.state.inputedText}
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
