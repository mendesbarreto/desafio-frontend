import React from 'react';

import { Forecast } from '../types';

import BoxCondition from './BoxCondition';
import Hr from './Hr';
import BoxWeekWeather from './BoxWeekWeather';

interface IBoxCity {
  city: string;
  condition: string;
  temperature: number;
  forecasts: Forecast[]
}

const BoxCity: React.FC<IBoxCity> = ({ city, temperature, condition, forecasts }) => {
  return (
    <div className="shadow">
      <BoxCondition city={city} temperature={temperature} condition={condition} />
      <Hr color="var(--dark-orange)" />
      <BoxWeekWeather week={forecasts} />
    </div>
  )
}

export default BoxCity;
