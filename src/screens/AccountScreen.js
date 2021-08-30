import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default AccountScreen=({navigation, user})=>{
    return <View>
        <View>
            <Text>`${user.FirstName} ${user.LastName}`</Text>
        </View>
        <View>
            <Text>`${user.ApplicantType}`</Text>
        </View>
        <View>
            <Text>`${user.ApplicationYear}`</Text>
        </View>
        <View>
            <Text>`${user.Semester}`</Text>
        </View>
        <View>
            <Text>`${user.ApplicationStatus}`</Text>
        </View>
    </View>
}

const styles=StyleSheet.create({

})