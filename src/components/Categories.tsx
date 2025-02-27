import React from "react";

type CategoriesProps = {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
};
const Categories = ({
  categories,
  activeCategory,
  setActiveCategory,
}: CategoriesProps) => {
  return (
    <div className="flex gap-4 items-center">
      <select
        name="categories"
        value={activeCategory}
        onChange={(e) => setActiveCategory(e.target.value)}
      >
        <option value="">---</option>
        {categories.map((cat: string) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button
        className="cursor-pointer bg-red-400 px-2 py-1 my-3 rounded text-white"
        onClick={() => setActiveCategory("")}
      >
        Réinitialiser
      </button>
    </div>
  );
};

export default Categories;
