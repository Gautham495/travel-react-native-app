import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {getShadow} from '../../utils/Shadow.js';

const PersonalInterest = ({navigation}) => {
  const [location, setLocation] = useState(null);
  const [description, setDescription] = useState(null);

  return (
    <View style={{alignItems: 'center'}}>
      
      
     
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
  },
  inputRow: {
    margin: 12,
    // borderWidth: 1,
    width: 250,
    backgroundColor: 'white',
    ...getShadow(2),
    borderRadius: 5,
    padding: 5,
    height: 50,
    color: 'black',
  },
});

export default PersonalInterest;
