import React, { useState, createContext } from "react";
import axios from "axios";
export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);

  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
