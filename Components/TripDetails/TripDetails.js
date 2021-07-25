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
import {List} from 'react-native-paper';
import {data1, data2, data3, data4, data5} from './Data';

const TripDetails = ({navigation}) => {
  const [expandedOne, setExpandedOne] = React.useState(true);
  const [expandedTwo, setExpandedTwo] = React.useState(true);
  const [expandedThree, setExpandedThree] = React.useState(true);
  const [expandedFour, setExpandedFour] = React.useState(true);
  const [expandedFive, setExpandedFive] = React.useState(true);

  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  const [tripDetailsData, setTripDetailsData] = useState([]);

  const [ids, setIds] = useState([]);
  const [indexes] = useState([0, 1, 2, 3, 4]);
  const getTripDetailsData = async () => {
    firestore()
      .collection('itinerary ')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          // console.log(`${doc.id}`);
          ids.push(doc.id);
        });
      });

    const tripDetails = await firestore().collection('itinerary ').get();

    const l = tripDetails.docs
      .map(item => item.data().schedule)
      .filter(item => item);

    const temp = [];

    // for (var i = 0; i < l.length; i++) {
    //   console.log(l.map(item => item)[i].map(item => item));
    // }
    setTripDetailsData(l);

    setTripDetailsData;
  };

  useEffect(() => {
    getTripDetailsData();
  }, []);

  return (
    <ScrollView>
      {/* <List.Accordion
        title="Monday"
        expanded={expanded}
        onPress={handlePress}>
        <List.Item
          title="First item"
          description="lol"
          left={props => <List.Icon {...props} icon="folder" />}
        />
        <List.Item
          title="Second item"
          description="lol"
          left={props => <List.Icon {...props} icon="folder" />}
        />
      </List.Accordion> */}

      <View style={{alignItems: 'center', marginTop: 50}}>
        <View style={{marginBottom: 30}}>
          <Text style={{fontSize: 20}}>Your 5 Day Trip Details</Text>
        </View>
        <View style={{marginBottom: 30}}>
          <Text style={{fontSize: 20}}>03-08-2021 to 08-08-2021</Text>
        </View>
        <View>
          <View style={{marginVertical:10, marginLeft:20}}>
            <Text style={{fontSize:18}}>Monday</Text>
          </View>
          <View>
              {data1 &&
                data1.map(item => (
                  <View
                    key={Math.random()}
                    style={{
                      backgroundColor: 'white',
                      padding: 10,
                      margin: 10,
                      width: 300,
                      borderRadius: 10,
                      ...getShadow(2),
                    }}>
                      <View>
                    <View style={{marginVertical:2}}>
                      <Text style={{fontSize:17}}>{item.activity_name}</Text>
                    </View>
                    <View style={{marginVertical:2}}>
                      <Text style={{fontSize:17}}> $ {item.price}</Text>
                    </View>
                    <View style={{marginVertical:2}}>
                      <Text style={{fontSize:17}}>{item.time}</Text>
                    </View>
                    <View style={{marginVertical:2}}>
                      <Text style={{fontSize:17}}>{item.type}</Text>
                    </View>
                    </View>
                   
                  </View>
                ))}
          </View>
          <View style={{marginVertical:10, marginLeft:20}}>
            <Text style={{fontSize:18}}>Tuesday</Text>
          </View>
         

          <View>
              {data2 &&
                data2.map(item => (
                  <View
                  key={Math.random()}
                  style={{
                    backgroundColor: 'white',
                    padding: 10,
                    margin: 10,
                    width: 300,
                    borderRadius: 10,
                    ...getShadow(2),
                  }}>
                    <View>
                  <View style={{marginVertical:2}}>
                    <Text style={{fontSize:17}}>{item.activity_name}</Text>
                  </View>
                  <View style={{marginVertical:2}}>
                    <Text style={{fontSize:17}}> $ {item.price}</Text>
                  </View>
                  <View style={{marginVertical:2}}>
                    <Text style={{fontSize:17}}>{item.time}</Text>
                  </View>
                  <View style={{marginVertical:2}}>
                    <Text style={{fontSize:17}}>{item.type}</Text>
                  </View>
                  </View>
                 
                </View>
                ))}
          </View>
          <View style={{marginVertical:10, marginLeft:20}}>
            <Text style={{fontSize:18}}>Wednesday</Text>
          </View>
          <View>
              {data3 &&
                data3.map(item => (
                  <View
                  key={Math.random()}
                  style={{
                    backgroundColor: 'white',
                    padding: 10,
                    margin: 10,
                    width: 300,
                    borderRadius: 10,
                    ...getShadow(2),
                  }}>
                    <View>
                  <View style={{marginVertical:2}}>
                    <Text style={{fontSize:17}}>{item.activity_name}</Text>
                  </View>
                  <View style={{marginVertical:2}}>
                    <Text style={{fontSize:17}}> $ {item.price}</Text>
                  </View>
                  <View style={{marginVertical:2}}>
                    <Text style={{fontSize:17}}>{item.time}</Text>
                  </View>
                  <View style={{marginVertical:2}}>
                    <Text style={{fontSize:17}}>{item.type}</Text>
                  </View>
                  </View>
                 
                </View>
                ))}
          </View>
          <View style={{marginVertical:10, marginLeft:20}}>
            <Text style={{fontSize:18}}>Thursday</Text>
          </View>
          <View>
              {data4 &&
                data4.map(item => (
                  <View
                    key={Math.random()}
                    style={{
                      backgroundColor: 'white',
                      padding: 10,
                      margin: 10,
                      width: 300,
                      borderRadius: 10,
                      ...getShadow(2),
                    }}>
                      <View>
                    <View style={{marginVertical:2}}>
                      <Text style={{fontSize:17}}>{item.activity_name}</Text>
                    </View>
                    <View style={{marginVertical:2}}>
                      <Text style={{fontSize:17}}> $ {item.price}</Text>
                    </View>
                    <View style={{marginVertical:2}}>
                      <Text style={{fontSize:17}}>{item.time}</Text>
                    </View>
                    <View style={{marginVertical:2}}>
                      <Text style={{fontSize:17}}>{item.type}</Text>
                    </View>
                    </View>
                   
                  </View>
                ))}
          </View>

          <View style={{marginVertical:10, marginLeft:20}}>
            <Text style={{fontSize:18}}>Friday</Text>
          </View>
          <View>
              {data5 &&
                data5.map(item => (
                  <View
                  key={Math.random()}
                  style={{
                    backgroundColor: 'white',
                    padding: 10,
                    margin: 10,
                    width: 300,
                    borderRadius: 10,
                    ...getShadow(2),
                  }}>
                    <View>
                  <View style={{marginVertical:2}}>
                    <Text style={{fontSize:17}}>{item.activity_name}</Text>
                  </View>
                  <View style={{marginVertical:2}}>
                    <Text style={{fontSize:17}}> $ {item.price}</Text>
                  </View>
                  <View style={{marginVertical:2}}>
                    <Text style={{fontSize:17}}>{item.time}</Text>
                  </View>
                  <View style={{marginVertical:2}}>
                    <Text style={{fontSize:17}}>{item.type}</Text>
                  </View>
                  </View>
                 
                </View>
                ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default TripDetails;
