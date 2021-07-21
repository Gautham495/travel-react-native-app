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
  const [destinations, setDestinations] = useState([
    {name: 'Jesper', location: 'Canada', url: ''},
  ]);

  return (
    <View style={{alignItems: 'center',marginTop:50}}>
      {destinations.map(item => (
        <TouchableOpacity>
          <View>
            <Text>
              {item.name}
              {item.location}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
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
