import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {getShadow} from '../../utils/Shadow.js';

const data = [
  {day: 'Monday', name: '1', details: ''},
  {name: '2'},
  {name: '3'},
];

const TripDetails = ({navigation}) => {
  return (
    <ScrollView>
      <View style={{alignItems: 'center', marginTop: 50}}>
        <View style={{marginBottom: 50}}>
          <Text style={{fontSize: 20}}>Your 5 Day Trip Details</Text>
        </View>
        <View>
          {data.map(item => (
            <TouchableOpacity
              style={{
                width: 300,
                backgroundColor: 'white',
                ...getShadow(2),
                borderRadius: 5,
                padding: 5,
                height: 200,
                alignItems: 'center',
                margin:10
              }}
              key={Math.random()}>
              <Text>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default TripDetails;
