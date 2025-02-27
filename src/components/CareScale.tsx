import React from "react";

type CareScaleProps = {
  scaleValue: number;
  careType: "light" | "water";
};
const CareScale = ({ scaleValue, careType }: CareScaleProps) => {
  const range = [1, 2, 3];

  const scaleType = careType === "light" ? "☀️" : "💧";

  const handleClick = () => {
    const rangeDescription: { [key: string]: string } = {
      1: "peu",
      2: "modérément",
      3: "beaucoup",
    };

    const scaleTypeDescription: { [key: string]: string } = {
      light: "de lumière",
      water: "d'arrosage",
    };

    alert(
      `Cette plante requiert ${rangeDescription[scaleValue.toString()]} ${
        scaleTypeDescription[careType]
      }`
    );
    alert(`Il s'agit d'un composant CareScale de type "${careType}"`);
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
};

export default CareScale;
