import React from 'react';

interface IDayWeek {
  day: string;
  min: number;
  max: number;
}

const DayWeek: React.FC<IDayWeek> = ({ day, min, max }) => {
  return (
    <div className="flex col align-center font-strong">
      <span>{day}</span>
      <div className="row">
        <span>{Math.round(min)}°</span>
        <span>{Math.round(max)}°</span>
      </div>
    </div>
  )
}

export default DayWeek;
