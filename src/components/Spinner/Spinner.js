import React from 'react';
import PropTypes from 'prop-types';

import ScaleLoader from 'react-spinners/ScaleLoader';
import { css } from '@emotion/core';

const override = css`
  display: block;
  margin: 0 auto;
`;

const Spinner = ({ isLoading }) => (
  <ScaleLoader css={override} size={20} color={'#3f51b5'} loading={isLoading} />
);

Spinner.propTypes = { isLoading: PropTypes.bool.isRequired };

export default Spinner;
