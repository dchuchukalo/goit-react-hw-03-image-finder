import React from 'react';
import PropTypes from 'prop-types';
import styles from './Error.module.css';

const Error = ({ text }) => <h2 className={styles.Error}>{text}</h2>;

Error.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Error;
