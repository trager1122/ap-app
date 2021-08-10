import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, TouchableOpacityBase } from 'react-native';

export default LoginScreen=()=>{
    const [userName, onChangeUserName] = React.useState("");
    const [password, onChangePassword] = React.useState("");

    return <View>
        <TextInput
        placeholder="User Name"
        style={styles.input}
        onChangeText={onChangeUserName}
        value={userName}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
      />
      <TouchableOpacity style={styles.button}>
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
        borderColor: "#fff"
    },
    textStyle:{
        fontSize: 24,
        textAlign: "center"
    }
});