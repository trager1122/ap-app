import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import admpros from '../api/admpros';

export default LoginScreen=( {navigation} )=>{
    const [userName, onChangeUserName] = useState("");
    const [password, onChangePassword] = useState("");

    return <View>
        <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="User Name"
        style={styles.input}
        onChangeText={text=>onChangeUserName(text)}
        value={userName}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        style={styles.input}
        onChangeText={text=>onChangePassword(text)}
        value={password}
      />
      <TouchableOpacity style={styles.button} onPress={()=>handleLogin(userName,password)}>
          <Text style={styles.textStyle}>Log in to your Account</Text>
      </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    button:{
        paddingTop: 20,
        paddingBottom: 20,
        color: "#fff",
        textAlign: "center",
        backgroundColor: "#68a0cf",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#fff",
        margin:12
    },
    textStyle:{
        fontSize: 24,
        textAlign: "center"
    }
});

const handleLogin=async( userName, password )=>{
  try{
    const response= await admpros.get('/login',{
      params:{
        userName,
        password
      }
    })
    setUser(response.data);
    navigation.navigate('Account', {user})
  } catch (err){
    console.log(err)
  }
}