import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

const Destination = ({navigation}) => {
  
  return (
    <View style={{alignItems: 'center',marginTop:50}}>
     
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: 'blue',
            padding: 10,
            borderRadius: 100,
            margin: 10,
          }}
          onPress={()=>{navigation.navigate('SearchDestination')}}
          >
          <Text>Lets Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Destination;
