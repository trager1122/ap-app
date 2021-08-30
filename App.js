import React, { useState, useMemo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartScreen from "./src/screens/StartScreen";
import LoginScreen from "./src/screens/LoginScreen";
import AccountScreen from "./src/screens/AccountScreen";
import admpros from "./src/api/admpros";
import { UserContext } from "./src/context/User";

const Stack = createNativeStackNavigator();

export default App = () => {
  const [jwt, setJWT] = useState({});
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});

  const userContext = useMemo(() => ({
    getToken: (username, password) => {
      setJWT(async () => {
        try {
          const response = await admpros.post("/token", {
            username,
            password,
          });
          return response.data;
        } catch (err) {
          console.error(err);
        }
      });
    },
    selectUser: (username) => {
      setUser(users.filter((user) => user.email == username));
    },
    loadUsersData: (token) => {
      setUsers(async () => {
        try {
          const response = await admpros.get("/demo", {
            Headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          return response.data;
        } catch (err) {
          console.error(err);
        }
      });
    }
  }));

  return (
    <UserContext.Provider value={userContext}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Start">
          <Stack.Screen name="Account" component={AccountScreen} data={user}/>
          <Stack.Screen name="Start" component={StartScreen} />
          <Stack.Screen name="Login" component={LoginScreen} data={jwt}/>
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
};
