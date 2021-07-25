import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({navigation}) => {
  const [age, setAge] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);

  const getData = async () => {
    try {
      const firstName = await AsyncStorage.getItem('firstName');
      const lastName = await AsyncStorage.getItem('lastName');
      const phoneNumber = await AsyncStorage.getItem('phoneNumber');
      const age = await AsyncStorage.getItem('age');
      if (firstName && lastName && phoneNumber && age) {
        setFirstName(firstName);
        setLastName(lastName);
        setPhoneNumber(phoneNumber);
        setAge(age);
      }
    } catch (e) {
      // error reading value
    }
  };
  useEffect(()=>{
      getData()
  },[])

  return <View></View>;
};

export default Profile;
