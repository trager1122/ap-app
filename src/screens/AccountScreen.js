import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default AccountScreen=({navigation, user})=>{
    return <View>
        <View>
            <Text>`${user.params.name}`</Text>
        </View>
        <View>
            <Text>`${user.params.apptype}`</Text>
        </View>
        <View>
            <Text>`${user.params.appyear}`</Text>
        </View>
        <View>
            <Text>`${user.params.semester}`</Text>
        </View>
        <View>
            <Text>`${user.params.appstatus}`</Text>
        </View>
    </View>
}

const styles=StyleSheet.create({

})