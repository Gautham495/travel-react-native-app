import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getShadow} from '../../utils/Shadow';

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
  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{alignItems: 'center'}}>
      {firstName && (
        <View
          style={{
            marginTop: 150,
            padding: 20,
            ...getShadow(1),
            borderRadius: 10,
            width: 300,
          }}>
          <View style={{alignItems: 'center', marginVertical: 20}}>
            <Text style={{fontSize: 21, fontFamily: 'Poppins-Medium'}}>
              Profile Info{' '}
            </Text>
          </View>
          <View style={{marginVertical: 10}}>
            <Text style={{fontSize: 20, fontFamily: 'Poppins-Medium'}}>
              First Name : {firstName}
            </Text>
          </View>
          <View style={{marginVertical: 10}}>
            <Text style={{fontSize: 20, fontFamily: 'Poppins-Medium'}}>
              Last Name : {lastName}
            </Text>
          </View>
          <View style={{marginVertical: 10}}>
            <Text style={{fontSize: 20, fontFamily: 'Poppins-Medium'}}>
              Phone Number : {phoneNumber}
            </Text>
          </View>
          <View style={{marginVertical: 10}}>
            <Text style={{fontSize: 20, fontFamily: 'Poppins-Medium'}}>
              Age : {age}
            </Text>
          </View>
        </View>
      )}
      {!age && (
        <View
          style={{
            marginTop: 200,
            padding: 20,
            ...getShadow(1),
            borderRadius: 10,
            width: 250,
          }}>
          <Text style={{fontSize: 20}}>
            Fill Out the Profile Info to Get your Information here
          </Text>
        </View>
      )}
    </View>
  );
};

export default Profile;
