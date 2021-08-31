import React, {useContext} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import UserContext from '../context/User';

export default AccountScreen=({navigation})=>{
    const { data }=useContext(UserContext);
    return <View>
        <View>
            <Text>`${data.FirstName} ${data.LastName}`</Text>
        </View>
        <View>
            <Text>`${data.ApplicantType}`</Text>
        </View>
        <View>
            <Text>`${data.ApplicationYear}`</Text>
        </View>
        <View>
            <Text>`${data.Semester}`</Text>
        </View>
        <View>
            <Text>`${data.ApplicationStatus}`</Text>
        </View>
    </View>
}

const styles=StyleSheet.create({

})