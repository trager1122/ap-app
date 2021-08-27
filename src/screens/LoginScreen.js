import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';


export default LoginScreen=( {navigation} )=>{
  const [userName,setUserName] = useState("");
    return <View>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="User Name"
        style={styles.input}
        onChangeText={(email)=>setUserName(email)}
      />
      {/* <TextInput
        placeholder="Password"
        secureTextEntry={true}
        style={styles.input}
        onChangeText={(password)=>onChangePassword(password)}
      /> */}
      <TouchableOpacity style={styles.button} onPress={()=>handleLogin(userName)}>
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

