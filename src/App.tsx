import Header from "./components/common/Header";
import ProductList from "./components/ProductList";
import CartProvider from "./context/cartContext";

export default function App() {
  return (
    <div className="p-6">
      <CartProvider>
        <Header />
        <ProductList />
      </CartProvider>
    </div>
  );
}
