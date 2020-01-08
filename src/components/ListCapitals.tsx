import React, { } from 'react';
import ListCities from './ListCities';

import { WeatherLocationResponse } from '../types';

import './ListCapitals.css';
import Loading from './Loading';


interface IListCities {
  capitals: Array<WeatherLocationResponse>,
  isLoading?: boolean,
  onSelect?: (_currentCity: WeatherLocationResponse) => void;
}

const ListCapitals: React.FC<IListCities> = ({ capitals = [], onSelect = () => { }, isLoading = false }) => {
  return (
    <div className="flex col">
      <h1 className="title-list">Capitais</h1>
      <div className="list-container">
        <ListCities cities={capitals.slice(0, 5)} onSelect={onSelect} />
        <ListCities cities={capitals.slice(5, 10)} onSelect={onSelect} />
      </div>
      <Loading className="my-16" isLoading={isLoading} />
    </div>
  )
}

export default ListCapitals;
