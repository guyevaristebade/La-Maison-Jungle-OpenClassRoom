import { useEffect, useState } from "react";
import { ShoppingCartProps } from "./App";

export type CartProps = {
  cart: ShoppingCartProps[];
  updateCart: (cart: ShoppingCartProps[]) => void;
};

const Cart = ({ cart, updateCart }: CartProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const total = cart.reduce(
    (acc, plant) => acc + plant.price * plant.amount,
    0
  );

  const onAmountChange = (name: string, amount: number) => {
    const isPresentInCart = cart.find((plant) => plant.name === name);
    let newCart: ShoppingCartProps[] = [];

    if (isPresentInCart) {
      newCart = cart.map((plant) => {
        if (plant.name === name && amount > 0) {
          return {
            ...plant,
            amount,
          };
        }
        return plant;
      });
      localStorage.setItem("cart", JSON.stringify(newCart));
      updateCart(newCart);
    }
  };

  const onDeleteItem = (name: string) => {
    const newCart = cart.filter((plant) => plant.name !== name);
    localStorage.setItem("cart", JSON.stringify(newCart));
    updateCart(newCart);
  };

  // useEffect(() => {
  //   alert(`J'aurai ${total}€ à payer 💸`);
  // }, [total]);

  return isOpen ? (
    <div className="bg-[#31b572] p-8 rounded-lg shadow-md text-white w-[400px]">
      <button
        className="cursor-pointer bg-red-600 rounded px-2 my-3 "
        onClick={() => setIsOpen(false)}
      >
        Fermer
      </button>
      <h2 className="text-2xl">Panier</h2>
      <ul>
        {cart.map(({ name, amount }) => (
          <li key={name} className="my-3">
            <div className="flex justify-between items-center flex-wrap">
              <div>{name}</div>
              <input
                name="amount"
                onChange={(e) => onAmountChange(name, +e.target.value)}
                min={0}
                type="number"
                value={amount}
                className="w-13"
              />
              <button
                className="bg-red-500 px-2 rounded cursor-pointer"
                onClick={() => onDeleteItem(name)}
              >
                x
              </button>
            </div>
          </li>
        ))}
      </ul>
      <h3>Total : {total}€</h3>
      <button
        className="px-2 py-1 rounded bg-red-500 my-3 cursor-pointer"
        onClick={() => {
          localStorage.removeItem("cart");
          updateCart([]);
        }}
      >
        Vider le panier
      </button>
    </div>
  ) : (
    <button
      className="bg-[#31b572] text-white px-2 rounded cursor-pointer"
      onClick={() => setIsOpen(true)}
    >
      Ouvrir le Panier
    </button>
  );
};

export default Cart;
