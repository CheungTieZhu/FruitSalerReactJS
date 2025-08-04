import React, { createContext, useState, useContext, ReactNode } from 'react';
import { CartItem, Fruit } from '../types';

interface CartContextType {
  cartItems: CartItem[];
  addMultipleToCart:(fruit: Fruit, quantity: number) => void;
  addToCart: (fruit: Fruit) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addMultipleToCart = (fruit: Fruit, quantity: number) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.fruit.id === fruit.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.fruit.id === fruit.id
            ? { ...item, quantity: quantity}
            : item
        );
      }
      return [...prevItems, { fruit, quantity: quantity }];
    });
  };

  const addToCart = (fruit: Fruit) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.fruit.id === fruit.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.fruit.id === fruit.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { fruit, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.fruit.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.fruit.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.fruit.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addMultipleToCart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getTotalPrice,
      getTotalItems
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};