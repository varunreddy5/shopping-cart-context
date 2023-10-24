'use client';
import { createContext, useState, useContext } from 'react';

export interface ItemProps {
  id: number;
  name: string;
  price: string;
}
interface CartContextType {
  items: ItemProps[];
  addToCart: any;
}
const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: any }) {
  const [items, setItems] = useState<ItemProps[] | []>([]);
  const addToCart = ({
    name,
    price,
    id,
  }: {
    name: string;
    price: string;
    id: number;
  }) => {
    setItems((prevState: Array<ItemProps> | []) => [
      ...prevState,
      { name, price, id },
    ]);
  };
  return (
    <CartContext.Provider value={{ items, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default function useCartContext() {
  const context = useContext(CartContext);
  if (context === null)
    throw new Error('useCartContext should be within the provider');
  return context;
}
