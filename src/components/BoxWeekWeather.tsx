import React, { useState, useEffect } from 'react';

import DayWeek from './DayWeek';
import { Forecast } from '../types';

import './BoxWeekWeather.css'

interface IWeekWeather {
  week: Forecast[]
}

const BoxWeekWeather: React.FC<IWeekWeather> = ({ week }) => {
  const [weekLimited, setWeekLimited] = useState(Array<Forecast>())

  useEffect(() => {
    setWeekLimited(week.slice(1, 5));
  }, [week])

  return (
    <div className="flex box-week justify-middle">
      {weekLimited.map((d, i) => <DayWeek key={i} day={d.day} min={d.low} max={d.high} />)}
    </div>
  )
}

export default BoxWeekWeather;
