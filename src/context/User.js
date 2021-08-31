import React,{ useState, createContext } from 'react';
import { apiUserName, apiPassword } from '../../token';
// import { View, Text } from 'react-native';
import admpros from '../api/admpros';

const UserContext= createContext();

export const UserProvider=({ children })=>{
    const [jwt, setJWT]=useState({});
    const [users, setUsers]=useState([])
    const [user, setUser]=useState({});

    const getToken=async (username, password) => {
        try {
          const response = await admpros.post("/token", {
            username,
            password,
          });
          setJWT(response.data);
        } catch (err) {
          console.error(err);
        }
    };

    const loadUsersData=async(token) => {
        try {
          const response = await admpros.get("/demo", {
            Headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUsers(response.data);
        } catch (err) {
          console.error(err);
        }
    }

    const selectUser=(username) => {
        getToken(apiUserName,apiPassword);
        loadUsersData(jwt);
        if(users.includes(email==userName)){
            setUser(users.filter((user)=>user.email == username))
        }   
    }
    return <UserContext.Provider value={{data: user, selectUser}}>
        {children}
    </UserContext.Provider>
}

export default UserContext;