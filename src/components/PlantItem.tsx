import React from "react";
import CareScale from "./CareScale";

type PlantItemProps = {
  name: string;
  cover: string;
  light: number;
  water: number;
  price: number;
  isSpecialOffer?: boolean;
  onClick?: (name: string) => void;
};
const PlantItem = ({ name, cover, light, water, price }: PlantItemProps) => {
  return (
    <li className="m-2.5 flex items-start justify-center flex-col capitalize relative">
      <div className="absolute right-0 top-0 font-bold text-white px-2.5 py-1.25 bg-[#31b572] rounded-tl-lg rounded-bl-lg rounded-tr-xl">
        {price}€
      </div>

      <img
        className="h-56 w-56 rounded-3xl mb-2.5"
        src={cover}
        alt={`${name} cover`}
      />
      {name}
      <div>
        <CareScale careType="water" scaleValue={water as number} />
        <CareScale careType="light" scaleValue={light as number} />
      </div>
    </li>
  );
};

export default PlantItem;
