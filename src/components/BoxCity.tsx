import React from 'react';

import { Forecast } from '../types';

import BoxCondition from './BoxCondition';
import Hr from './Hr';
import BoxWeekWeather from './BoxWeekWeather';

interface IBoxCity {
  city: string;
  condition: string;
  temperature: number;
  forecasts: Forecast[];
  onClose?: () => void;
}

const BoxCity: React.FC<IBoxCity> = ({ city, temperature, condition, forecasts, onClose }) => {
  return (
    <div className="shadow">
      <BoxCondition city={city} temperature={temperature} condition={condition} onClose={onClose} />
      <Hr color="var(--dark-orange)" />
      <BoxWeekWeather week={forecasts} />
    </div>
  )
}

export default BoxCity;
