import React, { useState, useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from "./src/screens/StartScreen";
import LoginScreen from "./src/screens/LoginScreen";
import AccountScreen from "./src/screens/AccountScreen";
import admpros from '../api/admpros';
import { UserContext } from './src/context/User';
import token from './token';

const Stack = createNativeStackNavigator();

export default App = () => {
  const[jwt, setJWT]=useState([]);
  const [users,setUsers]=useState([]);
  const [user,setUser]=useState({});

  const userContext=useMemo(()=>({
    signIn: (username)=>{
      setUser(users.filter((u)=>u.email==username))
    },
    sign
  }))

  const loadUserData=async()=>{
    try{
      const response= await admpros.get('/demo');
      setUsers(response.data);
    } catch(err){
      console.log(err)
    }
  }
  
  loadUserData();

  return(
      <UserContext.Provider value={userContext}>
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Start">
            <Stack.Screen name="Account" component={AccountScreen} />
            <Stack.Screen name="Start" component={StartScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
      </NavigationContainer>
      </UserContext.Provider>
  );
}
