import React, { } from 'react';
import ListCities from './ListCities';

import { WeatherLocationResponse } from '../types';

import './ListCapitals.css';


interface IListCities {
  capitals: Array<WeatherLocationResponse>,
  onSelect?: (_currentCity: WeatherLocationResponse) => void;
}

const ListCapitals: React.FC<IListCities> = ({ capitals = [], onSelect = () => { } }) => {
  return (
    <div className="flex col">
      <h1 className="title-list">Capitais</h1>
      <div className="list-container" >
        <ListCities cities={capitals.slice(0, 5)} onSelect={onSelect} />
        <ListCities cities={capitals.slice(5, 10)} onSelect={onSelect} />
      </div>
    </div>
  )
}

export default ListCapitals;
