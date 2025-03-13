import { useCart } from "../../context/cartContext";

export default function Cart() {
  const { totalQuantity } = useCart();

  return (
    <div className="relative">
      <i className="fas fa-cart-shopping text-orange-500 text-xl" />
      <div className="absolute -top-[6px] -right-1 w-4 h-4 rounded-full bg-black grid place-items-center">
        <span className="text-white text-xs">{totalQuantity}</span>
      </div>
    </div>
  );
}
