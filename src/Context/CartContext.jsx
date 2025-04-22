import { createContext, useContext, useReducer, useEffect } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const existing = state.find((item) => item.id === action.payload.id);
      if (existing) {
        const totalQty = existing.quantity + 1;
        if (totalQty > existing.stock) {
          return state;
        }
        return state.map((item) =>
          item.id === action.payload.id ? { ...item, quantity: totalQty } : item
        );
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    case "REMOVE":
      return state.filter((item) => item.id !== action.payload);
    case "SET":
      return action.payload;
    default:
      return state;
  }
};

const loadCartFromLocalStorage = () => {
  const stored = localStorage.getItem("Cart");
  return stored ? JSON.parse(stored) : [];
};

export const CartProvider = ({ children }) => {
  const [Cart, dispatchCart] = useReducer(
    cartReducer,
    [],
    loadCartFromLocalStorage
  );

  useEffect(() => {
    localStorage.setItem("Cart", JSON.stringify(Cart));
  }, [Cart]);

  return (
    <CartContext.Provider value={{ Cart, dispatchCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
