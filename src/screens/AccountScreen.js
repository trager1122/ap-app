import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button} from "react-native-elements";
import UserContext from "../context/User";

export default AccountScreen = ({ navigation }) => {
  const { userData, loadApps } = useContext(UserContext);

  return (
    <View>
      <View>
        <Text>
          `Name: ${userData.FirstName} ${userData.LastName}`
        </Text>
      </View>
      <View>
        <Text>`Email: ${userData.EmailAddress}`</Text>
      </View>
      <View>
          <Button title="See Your Applications" 
          onPress={loadApps}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
