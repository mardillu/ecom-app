
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Product = {
  id: string;
  name: string;
  price: number;
  image: NodeJS.Require;
  description: string[];
  specs: string;
};

type CartContextType = {
  cartItems: Product[];
  favouriteItems: Product[];
  addToCart: (item: Product) => void;
  removeFromCart: (id: string) => void;
  removeAllFromCart: (id: string) => void;
  toggleFavourite: (item: Product) => void;
  getUniqueCartItems: () => Product[];
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [favouriteItems, setFavouriteItems] = useState<Product[]>([]);

  const addToCart = (item: Product) => {
    setCartItems((prev) => [...prev, item]);
  };

  const removeFromCart = (id: string) => {
    //remove first item with the same id
    const ix = cartItems.findIndex((item) => item.id === id)
    if (ix >= 0) {
      setCartItems((prev) => [...prev.slice(0, ix), ...prev.slice(ix + 1)]);
    }
  };

  const removeAllFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  const getUniqueCartItems = () => {
    const uniqueItems: Product[] = [];
    cartItems.forEach((item) => {
      if (!uniqueItems.some((i) => i.id === item.id)) {
        uniqueItems.push(item);
      }
    });
    //sort alphabetically
    uniqueItems.sort((a, b) => a.name.localeCompare(b.name));
    return uniqueItems;
  };

  const addToFavourite = (item: Product) => {
    //prevent duplicates
    if (favouriteItems.some((i) => i.id === item.id)) return;
    setFavouriteItems((prev) => [...prev, item]);
  };

  const removeFromFavourite = (id: string) => {
    setFavouriteItems((prev) => prev.filter((item) => item.id !== id));
  };

  //toggle favourite
  const toggleFavourite = (item: Product) => {
    if (favouriteItems.some((i) => i.id === item.id)) {
      removeFromFavourite(item.id);
    } else {
      addToFavourite(item);
    }
  }

  return (
    <CartContext.Provider value={
        { 
            cartItems,
            favouriteItems,
            toggleFavourite,
            addToCart,
            removeFromCart,
            getUniqueCartItems,
            removeAllFromCart
        }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
