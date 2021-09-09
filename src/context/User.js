import React, { useState, createContext } from "react";
import admpros from "../api/admpros";
import * as SecureStore from "expo-secure-store";
import JWT from "expo-jwt";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const [personID, setPersonID] = useState({});
  const [userApps, setUserApps] = useState([]);

  // For initial login on app
  const getToken = async (username, password) => {
    try {
      const response = await admpros.post("/token", {
        username,
        password,
      });
      await setToken(response.data);
      console.log(token);
      SecureStore.setItemAsync("token", token);
    } catch (err) {
      console.error(err);
    }
  };

  //For login to persist
  const checkAuth = async () => {
    const storedToken = await SecureStore.getItemAsync("token");
    if (storedToken) {
      setToken(storedToken);
      return true;
    } else {
      alert("User is not currently logged in!");
      return false;
    }
  };

  //If user logs out, this will delete locally stored token and they will have to log back in to receive a new one
  const logout = async () => {
    await SecureStore.deleteItemAsync("token");
  };

  const loadUserInfo = async () => {
    try {
      const response = await admpros.get("/info", {
        Headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserInfo(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const loadUserApps = async () => {
    try {
      const response = await admpros.get(
        "/applications/" + JSON.stringify(personID),
        {
          Headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUserApps(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <UserContext.Provider
      value={{
        userInfo,
        userApps,
        getToken,
        checkAuth,
        logout,
        loadUserInfo,
        loadUserApps,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
