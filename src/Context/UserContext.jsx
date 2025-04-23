import { createContext, useContext, useReducer, useEffect } from "react";

const UserContext = createContext();

const userReducer = (state, action) => {
  switch (action.type) {
    case "REGISTER":
      localStorage.setItem("RegisteredUser", JSON.stringify(action.payload));
      localStorage.setItem("User", JSON.stringify(action.payload));
      return action.payload;

    case "LOGIN":
      const stored = JSON.parse(localStorage.getItem("RegisteredUser"));
      if (
        stored &&
        stored.email === action.payload.email &&
        stored.password === action.payload.password
      ) {
        localStorage.setItem("User", JSON.stringify(stored));
        return stored;
      } else {
        return null;
      }

    case "LOGOUT":
      localStorage.removeItem("User");
      return null;

    default:
      return state;
  }
};

const loadUserFromLocalStorage = () => {
  const stored = localStorage.getItem("User");
  return stored ? JSON.parse(stored) : null;
};

export const UserProvider = ({ children }) => {
  const [User, dispatchUser] = useReducer(
    userReducer,
    null,
    loadUserFromLocalStorage
  );

  useEffect(() => {
    localStorage.setItem("User", JSON.stringify(User));
  }, [User]);

  return (
    <UserContext.Provider value={{ User, dispatchUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within UserProvider");
  return context;
};
