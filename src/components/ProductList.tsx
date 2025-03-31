import { useEffect, useState } from "react";
import { getFoods } from "../services/foodService";
import { Food } from "../types";
import ProductCard from "./ProductCard";
import useCountdown from "../hooks/useCountdown";

export default function ProductList() {
  const [foods, setFoods] = useState<Food[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const countdown = useCountdown(30, isLoading);

  useEffect(() => {
    getFoods().then(({ data }) => {
      setFoods(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading)
    return (
      <div className="text-center mt-10">
        <h1 className="text-[25px] font-semibold">Loading...</h1>
        <p className="text-[16px] mt-2">
          Please note, it may take up to {countdown} seconds to load the data.
        </p>
      </div>
    );

  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      {foods.map((food) => (
        <ProductCard key={food.id} {...food} />
      ))}
    </div>
  );
}
