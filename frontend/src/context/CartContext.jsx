import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const localData = localStorage.getItem("cart");
      return localData ? JSON.parse(localData) : [];
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const exist = cartItems.find((x) => x._id === product._id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x._id === product._id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((x) => x._id !== id));
  };

  const incrementQuantity = (id) => {
    const exist = cartItems.find((x) => x._id === id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x._id === id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    }
  };

  const decrementQuantity = (id) => {
    const exist = cartItems.find((x) => x._id === id);
    if (exist && exist.qty > 1) {
      setCartItems(
        cartItems.map((x) =>
          x._id === id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
