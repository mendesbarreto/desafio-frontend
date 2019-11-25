import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

import BoxCapital from '../BoxCapital';

export default function Information({ capital, closeBoxCapital }) {
  return (
    <Container>
      <h1>Weather Forecast</h1>
      {capital && (
        <BoxCapital closeBoxCapital={closeBoxCapital} capital={capital} />
      )}
    </Container>
  );
}

Information.defaultProps = {
  capital: null,
};

Information.propTypes = {
  capital: PropTypes.shape({}),
  closeBoxCapital: PropTypes.func.isRequired,
};
