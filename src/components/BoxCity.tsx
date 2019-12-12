import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

import './BoxCondition.css'

interface IBoxWeather {
  city: string;
  condition: string;
  temperature: number;
}

const BoxCity: React.FC<IBoxWeather> = ({ city, temperature: weather, condition }) => {
  return (
    <div className="box-weather">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h3 className="city-selected">{city}</h3>
        <FontAwesomeIcon icon={faTimes} size="lg" color="var(--dark-orange)" />
      </div>
      <div className="weather-central">{weather}°C {condition}</div>
      <div className="flex row flex-wrap">
        <div className="flex col pr-16 space-items-right">
          <span className="pb-8">
            <FontAwesomeIcon icon={faArrowUp} color="var(--dark-orange)" />
            <b>16°</b>
            <FontAwesomeIcon icon={faArrowDown} color="var(--dark-orange)" />
            <b>16°</b>
          </span>
          <span className="pb-8">
            <span className="font-thin ">Vento</span>
            <b>16km/h</b>
          </span>
        </div>
        <div className="flex col pr-16 space-items-right">
          <span className="pb-8">
            <span className="font-thin pr-8">Sensação</span>
            <b>16°</b>
          </span>
          <span className="pb-8">
            <span className="font-thin pr-8">Humidade</span>
            <b>89%</b>
          </span>
        </div>
      </div>
    </div>
  )
}

export default BoxCity;
