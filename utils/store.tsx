import React from "react";
import { createContext, useContext, ReactNode, useEffect } from "react";

type MyContextProviderProps = {
  children: ReactNode;
};

type MyContextType = {
  setUser: (user: object) => void;
  user: object | null;
};

const MyContext = createContext<MyContextType>({
  setUser: () => {},
  user: null,
});

export const MyContextProvider: React.FC<MyContextProviderProps> = ({
  children,
}) => {
  const [user, setUser] = React.useState<object | null>(null);

  const contextValue: MyContextType = {
    setUser,
    user,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
};
