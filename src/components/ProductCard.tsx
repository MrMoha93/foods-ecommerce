import { useState } from "react";
import LikeButton from "./common/LikeButton";

export default function ProductCard() {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="relative border shadow shadow-gray-200 border-gray-200 w-full rounded-lg overflow-hidden ">
      <span className="absolute top-2 left-2">
        <LikeButton />
      </span>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour.jpg"
        alt="product image"
      />
      <div className="bg-gray-50 p-2 text-sm">
        <div className="flex justify-between">
          <span className="font-medium">Kiwi Fruit</span>
          <span className="text-gray-400">160 kr </span>
        </div>
        {quantity === 0 ? (
          <div className="text-center mt-2">
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="text-xs bg-orange-400 text-white py-1 px-3.5 rounded-full"
            >
              KÖP
            </button>
          </div>
        ) : (
          <div className="flex justify-between mt-2">
            <button
              onClick={() => setQuantity(quantity - 1)}
              className="flex items-center justify-center h-6 w-10 text-lg text-orange-500 bg-orange-100 rounded-full"
            >
              -
            </button>
            <span className="leading-6">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
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
