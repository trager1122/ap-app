import React from "react";
import { View, TouchableOpacity, StyleSheet, Image, Text } from "react-native";
import APLogo from "../../assets/AP-logo.jpg";

export default StartScreen = ( {navigation} )=> {
  return (
    <View>
      <Image style={styles.imageStyle} source={APLogo} />
      <View>
        <TouchableOpacity style={styles.buttonStyle} onPress={()=>navigation.navigate('Login')}>
          <Text style={styles.textStyle}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    resizeMode: "stretch",
    height: 400,
    width: 400,
    marginBottom: 50,
  },
  buttonStyle: {
    paddingTop: 20,
    paddingBottom: 20,
    color: "#fff",
    textAlign: "center",
    backgroundColor: "#68a0cf",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
  textStyle:{
      fontSize: 24,
      textAlign: "center"
  }
});
