import { useState, createContext, useEffect, useContext } from "react";

const AppContext = createContext();

export const useAuth = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    const saveUser = JSON.parse(localStorage.getItem("user"));
    return {
      user: saveUser || null,
      isAuthenticated: !!saveUser,
    };
  });

  useEffect(() => {
    if (currentUser.user) {
      localStorage.setItem("user", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("user");
    }
  }, [currentUser.user]);

  return (
    <AppContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AppContext.Provider>
  );
};
