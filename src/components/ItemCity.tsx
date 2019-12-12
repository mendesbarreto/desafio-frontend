import React from "react"

interface ItemCity {
  name: string;
  max: number;
  min: number;
};

const ItemCity: React.FC<ItemCity> = ({ name, max, min }) => {
  return (
    <div className="flex wrap justify-start font-strong pa-8">
      <span className="pr-8">{Math.round(max)}°</span>
      <span className="pr-8">{Math.round(min)}°</span>
      <span>{name}</span>
    </div>
  )
}

export default ItemCity
