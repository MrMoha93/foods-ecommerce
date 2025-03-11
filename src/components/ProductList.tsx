import ProductCard from "./ProductCard";

export default function ProductList() {
  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}
