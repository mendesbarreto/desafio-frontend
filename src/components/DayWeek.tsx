import React from 'react';

interface IDayWeek {
  day: string;
  min: number;
  max: number;
}

const DayWeek: React.FC<IDayWeek> = ({ day, min, max }) => {
  return (
    <div className="flex col align-center font-strong" style={{ padding: '18px 12px' }}>
      <span>{day}</span>
      <div className="row">
        <span className="pr-8" style={{ color: 'var(--dark-orange)' }}>{Math.round(min)}°</span>
        <span style={{ color: 'var(--dark-orange)' }}>{Math.round(max)}°</span>
      </div>
    </div>
  )
}

export default DayWeek;
