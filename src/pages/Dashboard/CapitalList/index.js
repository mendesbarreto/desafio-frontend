import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function CapitalList({ list }) {
  return (
    <Container>
      {list.map(capitalWeather => {
        return (
          <li key={capitalWeather.location.woeid}>
            <span>{capitalWeather.forecasts[0].low}°</span>
            <span>{capitalWeather.forecasts[0].high}°</span>
            <span>{capitalWeather.location.city}</span>
          </li>
        );
      })}
    </Container>
  );
}

CapitalList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      meetupId: PropTypes.string,
    })
  ).isRequired,
};
