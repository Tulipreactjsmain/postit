import React from 'react';
import { createContext, useContext, ReactNode } from 'react';

type MyContextType = {
  username: string;
  setUser: (name: string) => void;
};

const MyContext = createContext<MyContextType | undefined>(undefined);

type MyContextProviderProps = {
  children: ReactNode;
};

export const MyContextProvider: React.FC<MyContextProviderProps> = ({ children }) => {
  const [username, setUsername] = React.useState<string>('');
  
  const setUser = (name: string) => {
    setUsername(name);
  };

  const contextValue: MyContextType = {
    username,
    setUser,
  };

  return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>;
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
};
