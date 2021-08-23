import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import admpros from '../api/admpros';

export default LoginScreen=( {navigation} )=>{
    const [userName, onChangeUserName] = useState("");
    const [password, onChangePassword] = useState("");
    const [user,setUser]=useState([]);

    const handleLogin=async(userName,password)=>{
      try{
        const response= await admpros.get(`/login?EmailAddress=${userName}&password=${password}`);
        console.log(response.data)
        setUser(response.data);
        navigation.navigate('Account', {user})
      } catch (err){
        console.log(err)
      }
    }

    return <View>
        <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="User Name"
        style={styles.input}
        onChangeText={(email)=>onChangeUserName(email)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        style={styles.input}
        onChangeText={(password)=>onChangePassword(password)}
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

