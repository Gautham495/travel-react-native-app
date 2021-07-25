import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Button,
  Image,
  ScrollView,
} from 'react-native';
import {getShadow} from '../../utils/Shadow.js';
import firestore from '@react-native-firebase/firestore';

const TopTravels = ({navigation}) => {
  const [topTripsData, setTopTripsData] = useState([]);

  const getTopTripsData = async () => {
    const topTrips = await firestore().collection('toptrips').get();
    // console.log(topTrips.docs.map(item => item.data()));

    setTopTripsData(topTrips.docs.map(item => item.data()));
  };

  useEffect(() => {
    getTopTripsData();
  }, []);

  return (
    <ScrollView>
      {topTripsData ? (
        <View style={{margin: 10}}>
          {topTripsData.map(item => (
            <TouchableOpacity
              onPress={() => navigation.navigate('TripDetails')}
              key={Math.random()}
              style={{
                borderRadius: 1,
                ...getShadow(1),
                margin: 10,
                padding: 10,
                alignItems: 'center',
                backgroundColor: 'white',
              }}>
              <View style={{marginVertical:5}}>
                <Text style={{fontSize:18}}>{item.location}</Text>
              </View>
              <View style={{marginVertical:5}}>
                <Text style={{fontSize:18}}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      ) : (
        <Text>Loading</Text>
      )}
    </ScrollView>
  );
};
const styles = StyleSheet.create({});
export default TopTravels;
