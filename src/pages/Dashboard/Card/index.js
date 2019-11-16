import React from 'react';
import { MdArrowDownward, MdArrowUpward, MdClear } from 'react-icons/md';
import PropTypes from 'prop-types';

import { dateFormat } from '../../../services/dateFormat';

import {
  Container,
  Title,
  WeatherDay,
  Details,
  DiviserCard,
  NextDaysList,
} from './styles';

export default function Card({ weather, handleCancel }) {
  const { current_observation, location, forecasts } = weather;
  const { city, region, country } = location;
  const { condition, wind, atmosphere } = current_observation;
  const nextDays = [...forecasts];
  const [currentDay] = nextDays.splice(0, 1);
  const nextFiveDays = nextDays.splice(0, 5);
  return (
    <Container>
      <MdClear size="30px" color="#fb9234" onClick={handleCancel} />
      <Title>{`${city}, ${region} - ${country}`}</Title>
      <WeatherDay>{`${condition.temperature}°C ${condition.text}`}</WeatherDay>
      <Details>
        <span className="temperatures">
          <div>
            <MdArrowDownward size="16px" color="#fb9234" />
            <span>{currentDay.low}°</span>
          </div>
          <div>
            <MdArrowUpward size="16px" color="#fb9234" />
            <span>{currentDay.high}°</span>
          </div>
        </span>
        <span>
          Sensação <strong>{wind.chill}°C</strong>
        </span>
        <span>
          Vento <strong>{wind.speed}km/h</strong>
        </span>
        <span>
          Umidade <strong>{atmosphere.humidity}%</strong>
        </span>
      </Details>
      <DiviserCard />
      <NextDaysList>
        {nextFiveDays.map(weatherDay => (
          <li key={weatherDay.date}>
            <span>{dateFormat(weatherDay.date)}</span>
            <div>
              <span>{weatherDay.low}°</span>
              <span>{weatherDay.high}°</span>
            </div>
          </li>
        ))}
      </NextDaysList>
    </Container>
  );
}

Card.propTypes = {
  weather: PropTypes.shape({
    current_observation: PropTypes.shape({
      condition: PropTypes.shape(),
      wind: PropTypes.shape(),
      atmosphere: PropTypes.shape(),
    }),
    location: PropTypes.shape({
      city: PropTypes.string,
      region: PropTypes.string,
      country: PropTypes.string,
    }),
    forecasts: PropTypes.arrayOf(
      PropTypes.shape({
        meetupId: PropTypes.string,
      })
    ),
  }).isRequired,
  handleCancel: PropTypes.func.isRequired,
};
