import React from 'react';

import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ILoading {
  isLoading: boolean,
  className?: string,
  color?: string
}

const Loading: React.FC<ILoading> = ({ isLoading, color = "#fff", className }) => {
  return (
    <React.Fragment>
      {isLoading && (
        <div className={`flex justify-middle align-center ${className}`}>
          <FontAwesomeIcon icon={faCircleNotch} color={color} spin size="lg" />
          <span className="pl-8" style={{ color }}>Carregando...</span>
        </div>
      )}
    </React.Fragment>

  )
}

export default Loading;
