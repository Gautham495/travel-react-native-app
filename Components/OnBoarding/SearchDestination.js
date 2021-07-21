import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {getShadow} from '../../utils/Shadow.js';

const SearchDestination = ({navigation}) => {
  const [location, setLocation] = useState(null);
  const [description, setDescription] = useState(null);

  return (
    <View style={{alignItems: 'center'}}>
      <View>
        <Text>Search Your Destination</Text>
      </View>
      <View>
        <TextInput
          style={styles.inputRow}
          onChangeText={e => setLocation(e)}
          value={location}
          placeholder="Location"></TextInput>
      </View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={e => setDescription(e)}
          value={description}
          placeholder="Description"></TextInput>
      </View>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: 'blue',
            padding: 10,
            borderRadius: 100,
            margin: 10,
          }}
          onPress={() => {
            navigation.navigate('SearchDestination');
          }}>
          <Text>Lets Get Started</Text>
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

export default SearchDestination;
