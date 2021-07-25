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

const PreferredActivities = ({navigation}) => {
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());

  const [interest, setInterest] = useState(null);
  const [preferredActivities, setPreferredActivities] = useState(null);
  const [startDate, setStartDate] = useState(null);


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

  return (
    <View style={{alignItems: 'center', marginTop: 150}}>
      <View style={{alignItems: 'center', marginBottom: 20}}>
        <Text style={{fontSize: 18}}>Your Personal Interests !</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={e => setInterest(e)}
          value={interest}
          placeholder="Personal Interests"
        />
      </View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={e => setPreferredActivities(e)}
          value={preferredActivities}
          placeholder="Preferred Activities"
        />
      </View>
      <View style={{marginTop: 10}}>
        <TouchableOpacity
          style={[styles.input, {alignItems: 'center', height: 50}]}
          onPress={showDatepicker}>
          <Text style={{marginTop: 10}}>
            {startDate ? <Text>{startDate}</Text> : <Text>Trip End Date</Text>}
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
          onPress={() => navigation.navigate('TripCarousel')}>
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
  },
});

export default PreferredActivities;
