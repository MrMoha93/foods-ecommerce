import { useCart } from "../context/CartContext";

export default function CartPage() {
  const cart = useCart();

  return (
    <div className="p-6">
      <h1>Cart Page</h1>
      {cart.items.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
