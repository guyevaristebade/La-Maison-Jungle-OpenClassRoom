import { useEffect, useState } from "react";
import { Plant, plantList } from "../datas/plantList";
import { CartProps } from "./Cart";
import PlantItem from "./PlantItem";

export type ShoppingListProps = CartProps & {
  activeCategory: string;
  plantData: Plant[];
  setPlantData: (plantData: Plant[]) => void;
};
const ShoppingList = ({
  cart,
  updateCart,
  activeCategory,
  plantData,
  setPlantData,
}: ShoppingListProps) => {
  const addToCart = (name: string, price: number) => {
    const plant = cart.find((plant) => plant.name === name); // Check if the plant is already in the cart

    if (plant) {
      const existingPlant = cart.filter((plant) => plant.name !== name); // Remove the plant from the cart
      updateCart([...existingPlant, { name, amount: plant.amount + 1, price }]); // Add the plant with the new amount
      localStorage.setItem(
        "cart",
        JSON.stringify([...cart, { name, amount: plant.amount + 1, price }])
      ); // Save the cart in the local storage
    } else {
      updateCart([...cart, { name, amount: 1, price }]); // Add the plant to the cart
      localStorage.setItem(
        "cart",
        JSON.stringify([...cart, { name, amount: 1, price }])
      ); // Save the cart in the local storage
    }
  };

  return (
    <div>
      <ul className="p-8 flex flex-wrap max-w-[800px] min-h-screen overflow-scroll">
        {plantData.map(({ id, cover, name, water, light, price }) => (
          <div key={id}>
            <PlantItem
              key={id}
              name={name}
              cover={cover as string}
              water={water as number}
              light={light as number}
              price={price}
            />
            <button
              className="bg-gray-500 px-2 py-1 my-3 cursor-pointer rounded text-white"
              onClick={() => addToCart(name, price)}
            >
              Ajouter
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
