import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { getFoods } from "../services/foodService";
import { Food } from "../types";

export default function ProductList() {
  const [foods, setFoods] = useState<Food[]>([]);

  useEffect(() => {
    getFoods().then(({ data }) => setFoods(data));
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      {foods.map((food) => (
        <ProductCard key={food.id} {...food} />
      ))}
    </div>
  );
}
