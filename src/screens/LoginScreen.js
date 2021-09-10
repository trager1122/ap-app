import React, { useContext, useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import UserContext from "../context/User";

export default LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { getToken, loadUserInfo } = useContext(UserContext);

  const handleLogin=async()=>{
    await getToken(email,password);
    await loadUserInfo;
    // navigation.navigate('Account');
  }

  return (
    <View>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="E-mail Address"
        style={styles.input}
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        style={styles.input}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={ handleLogin }
      >
        <Text style={styles.textStyle}>Log in to your Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    paddingTop: 20,
    paddingBottom: 20,
    color: "#fff",
    textAlign: "center",
    backgroundColor: "#68a0cf",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    margin: 12,
  },
  textStyle: {
    fontSize: 24,
    textAlign: "center",
  },
});
