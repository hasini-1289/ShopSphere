import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  // load cart from localStorage on first render
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("shopsphere_cart");
    return saved ? JSON.parse(saved) : [];
  });

  // save to localStorage every time cartItems changes
  useEffect(() => {
    localStorage.setItem("shopsphere_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // add item or increase qty if already in cart
  function addToCart(product) {
    setCartItems((prev) => {
      const existing = prev.find((item) => item._id === product._id);
      if (existing) {
        return prev.map((item) =>
          item._id === product._id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  }

  function removeFromCart(id) {
    setCartItems((prev) => prev.filter((item) => item._id !== id));
  }

  function increaseQty(id) {
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  }

  function decreaseQty(id) {
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  }

  function clearCart() {
    setCartItems([]);
  }

  // total number of items in cart (for badge on navbar)
  const totalItems = cartItems.reduce((sum, item) => sum + item.qty, 0);

  // total price
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// custom hook to use cart anywhere
export function useCart() {
  return useContext(CartContext);
}
