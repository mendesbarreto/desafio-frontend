import React, { useEffect, useState } from 'react';
import { format, addDays } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { MdArrowDownward, MdArrowUpward, MdClose } from 'react-icons/md';

import PropTypes from 'prop-types';

import requestWeather from '../../services/api';
import {
  Container,
  Light,
  Info,
  CelsiusInfo,
  Details,
  List,
  Temperature,
  Divider,
} from './styles';

export default function InfoCity({ show, city, handleClose }) {
  const [monted, setMonted] = useState(false);
  const [cityInfo, setCityInfo] = useState('');

  useEffect(() => {
    async function loadWeather() {
      await requestWeather(city).then(data => setCityInfo(data));
      setMonted(true);
    }
    if (show && city !== '') loadWeather();
  }, [city, show]);

  return (
    monted && (
      <Container show={show}>
        <MdClose onClick={handleClose} color="#F98106" size={30} />
        <Details>
          <strong>{`${cityInfo.location.city}, ${cityInfo.location.region} - ${cityInfo.location.country}`}</strong>
          <br />
          <Temperature>{`${cityInfo.current_observation.condition.temperature}°C  ${cityInfo.current_observation.condition.text}`}</Temperature>
          <br />

          <div>
            <span>
              <MdArrowDownward color="#F98106" size={20} />
              <strong>{cityInfo.forecasts[0].low}°</strong>

              <MdArrowUpward color="#F98106" size={20} />
              <strong>{cityInfo.forecasts[0].high}°</strong>
            </span>

            <span>
              <Light>Sensação</Light>
              <Info>{cityInfo.current_observation.wind.chill}°C</Info>
            </span>

            <span>
              <Light>Vento</Light>
              <Info>{cityInfo.current_observation.wind.speed}km/h</Info>
            </span>

            <span>
              <Light>Humidade</Light>
              <Info>{cityInfo.current_observation.atmosphere.humidity}%</Info>
            </span>
          </div>
        </Details>

        <Divider />

        <List>
          {cityInfo.forecasts.splice(1, 5).map((item, index) => (
            <li key={item.day}>
              <strong>
                {format(addDays(new Date(), index + 1), 'eeee', {
                  locale: ptBR,
                })}
              </strong>
              <span>
                <CelsiusInfo>{item.low}°</CelsiusInfo>
                <CelsiusInfo>{item.high}°</CelsiusInfo>
              </span>
            </li>
          ))}
        </List>
      </Container>
    )
  );
}

InfoCity.propTypes = {
  show: PropTypes.bool,
  city: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
};

InfoCity.defaultProps = {
  show: false,
};
