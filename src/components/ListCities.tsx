import React from 'react';
import ItemCity from './ItemCity';
import { WeatherLocationResponse } from '../types';

interface IListCities {
  cities: Array<WeatherLocationResponse>,
  onSelect?: (_currentCity: WeatherLocationResponse) => void;
}

const ListCities: React.FC<IListCities> = ({ cities = [], onSelect = () => { } }) => {
  return (
    <div>
      <div className="font-thin">
        <span className="pa-8">Min</span>
        <span className="pa-8">Max</span>
      </div>
      <div className="flex col">
        {cities.map((c, i) =>
          <div key={i} onClick={() => onSelect(c)}>
            <ItemCity name={c.location.city} max={c.forecasts[0].high} min={c.forecasts[0].low} />
          </div>
        )}
      </div>
    </div>
  )
}

export default ListCities;
