import React from 'react';

interface IHr {
  size?: string;
  color?: string;
  width?: string;
}

const Hr: React.FC<IHr> = ({ width, size, color }) => {
  return (<div style={{ width, height: size, background: color }} />)
}

Hr.defaultProps = {
  width: "100%",
  size: "1px",
  color: "#fafafa"
}

export default Hr;
