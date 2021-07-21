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
import firestore from '@react-native-firebase/firestore';
import { List } from 'react-native-paper';

const data = [
  {day: 'Monday', name: '1', details: ''},
  {name: '2'},
  {name: '3'},
];

const TripDetails = ({navigation}) => {


  const [expandedOne, setExpandedOne] = React.useState(true);
  const [expandedTwo, setExpandedTwo] = React.useState(true);
  const [expandedThree, setExpandedThree] = React.useState(true);
  const [expandedFour, setExpandedFour] = React.useState(true);
  const [expandedFive, setExpandedFive] = React.useState(true);

  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  const [tripDetailsData, setTripDetailsData] = useState([]);

  const[ids,setIds] = useState([])

  const getTripDetailsData = async () => {

    firestore().collection("itinerary ").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          console.log(`${doc.id}`);
          ids.push(doc.id)
      })});
  

    const tripDetails = await firestore().collection("itinerary ").get();
    // console.log(tripDetails.docs);

    setTripDetailsData(tripDetails.docs.map(item => item.data()));
  };

  useEffect(() => {
    getTripDetailsData();
  }, []);

  return (
    <ScrollView>
       <List.Accordion
        title="Monday"
        // left={props => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={handlePress}>
        <List.Item title="First item" description="lol"  left={props => <List.Icon {...props} icon="folder" />} />
        <List.Item title="Second item" description="lol"  left={props => <List.Icon {...props} icon="folder" />} />
      
      </List.Accordion>

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
