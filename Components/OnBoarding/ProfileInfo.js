import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {getShadow} from '../../utils/Shadow.js';
import DateTimePicker from '@react-native-community/datetimepicker';
import dayjs from 'dayjs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';

const ProfileInfo = ({navigation}) => {
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const [date, setDate] = useState(new Date());

  const [age, setAge] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);

  const [travellers, setTravellers] = useState(null);

  const [startDate, setStartDate] = useState(null);

  const [budget, setBudget] = useState(null);

  const onChangeStart = (event, selectedDate) => {
    // setStartDate(dayjs(selectedDate).format('DD-MM-YYYY'));
    setStartDate(selectedDate.toLocaleDateString());

    setShow(false);
  };

  const showMode = currentMode => {
    setShow(true);

    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const storeData = async (firstName, lastName, phoneNumber, age) => {
    try {
      await AsyncStorage.setItem('firstName', firstName);
      await AsyncStorage.setItem('lastName', lastName);
      await AsyncStorage.setItem('phoneNumber', phoneNumber);
      await AsyncStorage.setItem('age', age);
    } catch (e) {
      // saving error
    }
  };

  const checkNavigate = async () => {
    if (firstName && lastName && phoneNumber && age) {
      await firestore().collection('profile').add({
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        age: age,
      });
      storeData(firstName, lastName, phoneNumber, age)
      navigation.navigate('PreferredActivities');
    } else {
      alert('Fill All Fields');
     
    }
  };

  return (
    <View style={{alignItems: 'center', marginTop: 120}}>
      <View style={{alignItems: 'center', marginBottom: 20}}>
        <Text style={{fontSize: 18}}>Tell Us About Yourself!</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={e => setAge(e)}
          value={age}
          placeholder="Age"
          keyboardType="numeric"
        />
      </View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={e => setFirstName(e)}
          value={firstName}
          placeholder="First Name"
        />
      </View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={e => setLastName(e)}
          value={lastName}
          placeholder="Last Name"
        />
      </View>

      <View>
        <TextInput
          style={styles.input}
          onChangeText={e => setPhoneNumber(e)}
          value={phoneNumber}
          placeholder="Phone Number"
          keyboardType="numeric"
        />
      </View>

      <View style={{marginTop: 10}}>
        <TouchableOpacity
          style={[styles.input, {alignItems: 'center'}]}
          onPress={showDatepicker}>
          <Text style={{marginTop: 10}}>
            {startDate ? (
              <Text>{startDate}</Text>
            ) : (
              <Text>Trip Start Date</Text>
            )}
          </Text>
        </TouchableOpacity>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChangeStart}
        />
      )}

      <View>
        <TouchableOpacity
          style={{
            backgroundColor: 'blue',
            padding: 20,
            borderRadius: 100,
            margin: 10,
            width: 250,
            alignItems: 'center',
          }}
          onPress={() => checkNavigate()}>
          <Text style={{fontSize: 20, color: 'white'}}> Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 12,
    // borderWidth: 1,
    width: 250,
    backgroundColor: 'white',
    ...getShadow(2),
    borderRadius: 5,
    padding: 5,
    height: 50,
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileInfo;
