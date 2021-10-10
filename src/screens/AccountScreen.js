import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import admpros from '../api/admpros';
import { Context as AuthContext } from '../context/AuthContext';
import JWT from 'expo-jwt';

const AccountScreen = () => {
  const [userInfo, setUserInfo]=useState({});
  const [applications, setApplications]=useState([]);
  const { signout } = useContext(AuthContext);
  
  const getAccountInfo=async()=>{
    try{
      const token=await AsyncStorage.getItem("token");
      const response=await admpros.get("/info",{
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
      setUserInfo(response.data);
    } catch (error){
      console.error(error)
    }
  }
  // function for grabbing application information-getApplicatonInfo
  const getApplicationsInfo=async()=>{
    try{
      const token=await AsyncStorage.getItem("token");
      let decodedToken=JWT.decode(token);
      let personID=decodedToken.pid;
      const response=await admpros.get("/applications", personID,{
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
      setApplications(response.data);
    } catch (error){
      console.error(error)
    }
  }
  
  useEffect(()=>{
    getAccountInfo();
    getApplicationsInfo();
  },[])

  return (
    <>
      <Text style={{ fontSize: 48 }}>AccountScreen</Text>
      {/* Flat List of all applications with key being the university since that should be a unique value */}
      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
