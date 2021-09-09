import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import UserContext from "../context/User";

export default AccountScreen = ({ navigation }) => {
  const { userInfo, loadApps } = useContext(UserContext);

  console.log(userInfo);

  return (
    <View>
      <View>
        <Text>
          `Name: ${userInfo.FirstName} ${userInfo.LastName}`
        </Text>
      </View>
      <View>
        <Text>`Email: ${userInfo.EmailAddress}`</Text>
      </View>
      <View>
        <Button title="See Your Applications" onPress={loadApps} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
