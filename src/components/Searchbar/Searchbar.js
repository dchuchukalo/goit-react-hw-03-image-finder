import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Serchbar.module.css';

class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handleSubmitForm = e => {
    const { onSubmit } = this.props;
    const { inputValue } = this.state;

    e.preventDefault();
    onSubmit(inputValue);
    this.setState({ inputValue: '' });
  };

  handleChangeInput = ({ currentTarget }) => {
    this.setState({ inputValue: currentTarget.value });
  };

  render() {
    const { inputValue } = this.state;

    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmitForm}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={inputValue}
            onChange={this.handleChangeInput}
          />
        </form>
      </header>
    );
  }
}

Searchbar.ptopTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
