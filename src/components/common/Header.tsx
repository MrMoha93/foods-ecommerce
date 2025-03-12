import Cart from "./Cart";

export default function Header() {
  return (
    <div className="flex justify-between">
      <h1 className="text-xl font-bold">All Products</h1>
      <Cart />
    </div>
  );
}
