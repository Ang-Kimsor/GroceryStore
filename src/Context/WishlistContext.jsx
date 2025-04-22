import { createContext, useReducer, useContext, useEffect } from "react";

const WishlistContext = createContext();

const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      if (state.find((item) => item.id === action.payload.id)) {
        return state;
      }
      return [...state, action.payload];

    case "REMOVE_FROM_WISHLIST":
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};

const loadWishlistFromLocalStorage = () => {
  const stored = localStorage.getItem("wishlist");
  return stored ? JSON.parse(stored) : [];
};

export const WishlistProvider = ({ children }) => {
  const [wishlist, dispatchWishlist] = useReducer(
    wishlistReducer,
    [],
    loadWishlistFromLocalStorage
  );

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <WishlistContext.Provider value={{ wishlist, dispatchWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used inside a WishlistProvider");
  }
  return context;
};
