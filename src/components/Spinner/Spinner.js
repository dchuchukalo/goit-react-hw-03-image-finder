import React from 'react';
import PropTypes from 'prop-types';

import ScaleLoader from 'react-spinners/ScaleLoader';
import { css } from '@emotion/core';

const whichPosition = position => {
  if (position === 'center') {
    return css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `;
  }

  if (position === 'bottom') {
    return css`
      display: block;
      margin: 0 auto;
    `;
  }
};

const Spinner = ({ isLoading, position }) => (
  <>
    <ScaleLoader
      css={whichPosition(position)}
      size={20}
      color={'#3f51b5'}
      loading={isLoading}
    />
  </>
);

Spinner.defaultProps = {
  position: 'bottom',
};

Spinner.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  position: PropTypes.string,
};

export default Spinner;
