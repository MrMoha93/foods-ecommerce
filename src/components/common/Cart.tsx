import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function Cart() {
  const { totalQuantity } = useCart();
  const navigate = useNavigate();

  return (
    <div className="relative" onClick={() => navigate("/cart")}>
      <i className="fas fa-cart-shopping text-orange-500 text-xl" />
      <div className="absolute -top-[6px] -right-1 w-4 h-4 rounded-full bg-black grid place-items-center">
        <span className="text-white text-xs">{totalQuantity}</span>
      </div>
    </div>
  );
}
