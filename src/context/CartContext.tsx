import { createContext, PropsWithChildren, useContext, useState } from "react";
import { Food } from "../types";

interface CartItem extends Food {
  quantity: number;
}

interface Cart {
  items: CartItem[];
  totalQuantity: number;
  add(food: Food): void;
  remove(food: Food): void;
}

const CartContext = createContext({} as Cart);

export default function CartProvider({ children }: PropsWithChildren) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  function add(food: Food) {
    const cartItem = items.find((item) => item.id === food.id);

    if (cartItem) {
      cartItem.quantity++;
      setItems([...items]);
    } else {
      setItems([...items, { ...food, quantity: 1 }]);
    }
    setTotalQuantity(totalQuantity + 1);
  }

  function remove(food: Food) {
    const cartItem = items.find((item) => item.id === food.id);

    if (!cartItem) return;

    cartItem.quantity--;
    setItems(items.filter((item) => item.quantity > 0));
    setTotalQuantity(totalQuantity - 1);
  }

  return (
    <CartContext.Provider value={{ add, remove, items, totalQuantity }}>
      {children}{" "}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
