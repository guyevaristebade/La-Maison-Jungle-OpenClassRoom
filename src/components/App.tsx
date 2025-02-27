import Banner from "./Banner";
import Footer from "./Footer";
import logo from "../assets/logo.png";
import ShoppingList from "./ShoppingList";
import Cart from "./Cart";
import { useEffect, useState } from "react";
import Categories from "./Categories";
import { Plant, plantList } from "../datas/plantList";

export type ShoppingCartProps = {
  name: string;
  amount: number;
  price: number;
};

function App() {
  const [cart, updateCart] = useState<ShoppingCartProps[]>([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [plantData, setPlantData] = useState<Plant[]>(plantList);

  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    [] as string[]
  );

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      updateCart(JSON.parse(cart));
    }

    if (activeCategory) {
      setPlantData(
        plantList.filter((plant) => plant.category === activeCategory)
      );
    } else {
      setPlantData(plantList);
    }
  }, [activeCategory]);

  return (
    <div className="p-8">
      <Banner>
        <img src={logo} alt="logo maison jungle" className="w-10" />
        <h1 className="text-3xl text-bold ">La maison Jungle</h1>
      </Banner>
      <Cart cart={cart} updateCart={updateCart} />
      <Categories
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <ShoppingList
        cart={cart}
        updateCart={updateCart}
        activeCategory={activeCategory}
        plantData={plantData}
        setPlantData={setPlantData}
      />
      <Footer />
    </div>
  );
}

export default App;
