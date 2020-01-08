import React from 'react';

interface ICityWeather {
  city: string;
  max: number;
  min: number;
}

const CityWeather: React.FC<ICityWeather> = ({ city, max, min }) => (
  <div className="flex">
    <span className="pr-8">{max}</span>
    <span className="pr-8">{min}</span>
    <span>{city}</span>
  </div>
);

export default CityWeather;
