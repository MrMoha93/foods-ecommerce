import LikeButton from "./common/LikeButton";

export default function ProductCard() {
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
        <div className="text-center mt-2">
          <button className="text-xs bg-orange-400 text-white py-1 px-3.5 rounded-full">
            KÖP
          </button>
        </div>
      </div>
    </div>
  );
}
