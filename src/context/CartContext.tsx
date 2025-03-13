import { createContext, PropsWithChildren, useContext, useState } from "react";

interface Cart {
  totalQuantity: number;
  setTotalQuantity(quantity: number): void;
}

const CartContext = createContext({} as Cart);

export default function CartProvider({ children }: PropsWithChildren) {
  const [totalQuantity, setTotalQuantity] = useState(0);

  return (
    <CartContext.Provider value={{ totalQuantity, setTotalQuantity }}>
      {children}{" "}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
