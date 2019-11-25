import React from 'react';
import PropTypes from 'prop-types';
import * as FontAwesome from 'react-icons/fa';

export default function BoxCapital({
  capital: { forecasts, location, current_observation },
  closeBoxCapital,
}) {
  const today = forecasts[0];

  const windSpeed = current_observation.wind.speed;
  const sensation = Math.round(
    33 +
      (10 * Math.sqrt(windSpeed) + 10.45 - windSpeed) *
        ((current_observation.condition.temperature - 33) / 22)
  );

  return (
    <div name="boxcapital">
      <FontAwesome.FaTimes onClick={closeBoxCapital} />
      <div>
        <span>{`${location.city}, ${location.region}`}</span>
        <strong>
          {current_observation.condition.temperature}º{' '}
          {current_observation.condition.text}
        </strong>
        <div>
          <div name="rowboxcap">
            <span>
              <span>
                <FontAwesome.FaArrowDown />
                <strong>{Math.round(today.low)}º</strong>
              </span>
              <span>
                <FontAwesome.FaArrowUp />
                <strong>{Math.round(today.high)}º</strong>
              </span>
            </span>
            <span>
              Sensation: <strong>{sensation}º</strong>
            </span>
          </div>
          <div name="rowboxcap">
            <span>
              Wind: <strong>{windSpeed}km/h</strong>
            </span>
            <span>
              Humidity:{' '}
              <strong>{current_observation.atmosphere.humidity}%</strong>
            </span>
          </div>
        </div>
      </div>
      <hr />
      <div name="nextdays">
        {forecasts.slice(1, 6).map((forecast, index) => (
          <div key={String(index)}>
            <h2>{forecast.day}</h2>
            <div>
              <strong>{forecast.low}º</strong>
              <strong>{forecast.high}º</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

BoxCapital.propTypes = {
  capital: PropTypes.shape({
    forecasts: PropTypes.array.isRequired,
    location: PropTypes.object.isRequired,
    current_observation: PropTypes.object.isRequired,
  }).isRequired,
  closeBoxCapital: PropTypes.func.isRequired,
};
