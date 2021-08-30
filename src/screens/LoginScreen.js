import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { apiUserName, apiPassword } from '../../token';
import { UserContext } from '../context/User';

export default LoginScreen=( {navigation} )=>{
  const [userName,setUserName] = useState("");
  const {getToken, loadUsersData, selectUser}=useContext(UserContext);

  const loginUser=()=>{
    getToken(apiUserName,apiPassword)
    loadUsersData(jwt)
    selectUser(userName)
  }
    return <View>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="User Name"
        style={styles.input}
        onChangeText={(username)=>setUserName(username)}
      />
      {/* <TextInput
        placeholder="Password"
        secureTextEntry={true}
        style={styles.input}
        onChangeText={(password)=>onChangePassword(password)}
      /> */}
      <TouchableOpacity style={styles.button} 
      onPress={()=>loginUser()}>
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

