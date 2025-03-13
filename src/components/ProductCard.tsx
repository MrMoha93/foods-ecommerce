import { useState } from "react";
import LikeButton from "./common/LikeButton";
import { Food } from "../types";
import { useCart } from "../context/cartContext";

export default function ProductCard({ imageUrl, name, price }: Food) {
  const { totalQuantity, setTotalQuantity } = useCart();
  const [quantity, setQuantity] = useState(0);

  function handleIncrement() {
    setQuantity(quantity + 1);
    setTotalQuantity(totalQuantity + 1);
  }

  function handleDicrement() {
    setQuantity(quantity - 1);
    setTotalQuantity(totalQuantity - 1);
  }

  return (
    <div className="relative border shadow shadow-gray-200 border-gray-200 w-full rounded-lg overflow-hidden ">
      <span className="absolute top-2 left-2">
        <LikeButton />
      </span>
      <div className="p-4">
        <img className="h-40 object-contain" src={imageUrl} alt={name} />
      </div>
      <div className="bg-gray-50 p-2 text-sm">
        <div className="flex justify-between">
          <span className="font-medium">{name}</span>
          <span className="text-gray-400">{price} kr </span>
        </div>
        {quantity === 0 ? (
          <div className="text-center mt-2">
            <button
              onClick={handleIncrement}
              className="text-xs bg-orange-400 text-white py-1 px-3.5 rounded-full"
            >
              KÖP
            </button>
          </div>
        ) : (
          <div className="flex justify-between mt-2">
            <button
              onClick={handleDicrement}
              className="flex items-center justify-center h-6 w-10 text-lg text-orange-500 bg-orange-100 rounded-full"
            >
              -
            </button>
            <span className="leading-6">{quantity}</span>
            <button
              onClick={handleIncrement}
              className="flex items-center justify-center h-6 w-10 text-lg text-orange-500 bg-orange-100 rounded-full"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
