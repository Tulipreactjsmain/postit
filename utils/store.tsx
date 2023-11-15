import React from "react";
import { createContext, useContext, ReactNode, useEffect } from "react";

type MyContextProviderProps = {
  children: ReactNode;
};

const MyContext = createContext<undefined>(undefined);

export const MyContextProvider: React.FC<MyContextProviderProps> = ({
  children,
}) => {
  const [user, setUser] = React.useState<string>("");
  const [loginLoader, setLoginLoader] = React.useState<boolean>(false);

  // useEffect(() => {
  //   const getCookie = async () => {
  //     const userCookie = Cookies.get("user");

  //     console.log("ccook", userCookie);

  //     if (userCookie) {
  //       try {
  //         const response = await axios.get("api/hello");
  //         setUser(response.data);
  //         console.log(response);
  //       } catch (error) {
  //         console.error("Error fetching cookie:", error);
  //       }
  //     }
  //   };

  //   getCookie();
  // }, []);

  const contextValue: any = {
    // setUser,
    // user,
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
