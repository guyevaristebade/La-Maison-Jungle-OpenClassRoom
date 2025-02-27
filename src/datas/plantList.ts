import monstera from "../assets/monstera.jpg";
import basil from "../assets/basil.jpg";
import calathea from "../assets/calathea.jpg";
import lyrata from "../assets/lyrata.jpg";
import mint from "../assets/mint.jpg";
import olivier from "../assets/olivier.jpg";
import pothos from "../assets/pothos.jpg";
import succulent from "../assets/succulent.jpg";

export type Plant = {
  name: string;
  category: string;
  id: string;
  isBestSale?: boolean;
  water?: number;
  light?: number;
  cover?: string;
  price: number;
};

export const plantList: Plant[] = [
  {
    name: "monstera",
    category: "classique",
    id: "1ed",
    light: 2,
    water: 3,
    cover: monstera,
    price: 8,
  },
  {
    name: "ficus lyrata",
    category: "classique",
    id: "2ab",
    light: 3,
    water: 1,
    cover: lyrata,
    price: 12,
  },
  {
    name: "pothos argenté",
    category: "classique",
    id: "3sd",
    light: 1,
    water: 2,
    cover: pothos,
    price: 15,
  },
  {
    name: "yucca",
    category: "classique",
    id: "4kk",
    light: 3,
    water: 1,
    cover: mint,
    price: 15,
  },
  {
    name: "olivier",
    category: "extérieur",
    id: "5pl",
    light: 3,
    water: 1,
    cover: olivier,
    price: 15,
  },
  {
    name: "géranium",
    category: "extérieur",
    id: "6uo",
    light: 2,
    water: 2,
    cover: calathea,
    price: 25,
  },
  {
    name: "basilique",
    category: "extérieur",
    id: "7ie",
    light: 2,
    water: 3,
    cover: basil,
    price: 15,
  },
  {
    name: "aloe",
    category: "plante grasse",
    id: "8fp",
    light: 2,
    water: 1,
    cover: calathea,
    price: 89,
  },
  {
    name: "succulente",
    category: "plante grasse",
    id: "9vn",
    light: 2,
    water: 1,
    cover: succulent,
    price: 5,
  },
];
