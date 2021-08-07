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
import Collapsible from 'react-native-collapsible';

const TripDetails = ({navigation}) => {
  const [expandedOne, setExpandedOne] = React.useState(false);
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
          console.log(doc.data());
          ids.push(doc.id);
        });
      });

    const tripDetails = await firestore().collection('itinerary ').get();

    const l = tripDetails.docs
      .map(item => item.data().schedule)
      .filter(item => item);

    console.log(l);

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

  const convertTo = hours => {
    var suffix = hours >= 12 ? 'PM' : 'AM';
    var hour = ((hours + 11) % 12) + 1 + suffix;
    return hour;
  };

  return (
    <ScrollView>
      {/* <List.Accordion title="Monday" expanded={expanded} onPress={handlePress}>
        {data1 &&
          data1.map(item => (
            <List.Item
              title={item.activity}
              description={item.activity}
              left={props => <List.Icon {...props} icon="folder" />}
            />
          ))}
      </List.Accordion> */}

      <View style={{alignItems: 'center', marginTop: 50}}>
        <View style={{marginBottom: 30}}>
          <Text style={{fontSize: 20, fontFamily: 'Poppins-Medium'}}>
            Your 5 Day Trip Details
          </Text>
        </View>
        <View style={{marginBottom: 30}}>
          <Text style={{fontSize: 20, fontFamily: 'Poppins-Medium'}}>
            03-08-2021 to 08-08-2021
          </Text>
        </View>
        <View>
          <View
            style={{marginVertical: 10, marginLeft: 20, alignItems: 'center'}}>
            <TouchableOpacity
              style={{
                backgroundColor: 'blue',
                padding: 10,
                borderRadius: 100,
                margin: 10,
                width: 250,
                alignItems: 'center',
              }}
              onPress={() => setExpandedOne(!expandedOne)}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'Poppins-Medium',
                  color: 'white',
                }}>
                Monday
              </Text>
            </TouchableOpacity>
          </View>
          <Collapsible collapsed={expandedOne}>
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
                      flexDirection: 'row',
                    }}>
                    <View style={{width: '60%', alignItems: 'center'}}>
                      <View style={{marginVertical: 2}}>
                        <Text
                          style={{fontSize: 17, fontFamily: 'Poppins-Medium'}}>
                          {item.activity_name}
                        </Text>
                      </View>
                      <View style={{marginVertical: 2}}>
                        <Text
                          style={{fontSize: 17, fontFamily: 'Poppins-Medium'}}>
                          {' '}
                          $ {item.price}
                        </Text>
                      </View>
                      <View style={{marginVertical: 2}}>
                        <Text
                          style={{fontSize: 17, fontFamily: 'Poppins-Medium'}}>
                          {item.time}
                        </Text>
                      </View>
                      <View style={{marginVertical: 2}}>
                        <Text
                          style={{fontSize: 17, fontFamily: 'Poppins-Medium'}}>
                          {item.type}
                        </Text>
                      </View>
                    </View>
                    <View>
                      <Image
                        source={{uri: item.img_url}}
                        style={{width: 75, height: 75, marginTop:20}}
                      />
                    </View>
                  </View>
                ))}
            </View>
          </Collapsible>

          <View
            style={{marginVertical: 10, marginLeft: 20, alignItems: 'center'}}>
            <TouchableOpacity
              style={{
                backgroundColor: 'blue',
                padding: 10,
                borderRadius: 100,
                margin: 10,
                width: 250,
                alignItems: 'center',
              }}
              onPress={() => setExpandedTwo(!expandedTwo)}
              
              >
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                  fontFamily: 'Poppins-Medium',
                }}>
                Tuesday
              </Text>
            </TouchableOpacity>
          </View>
          <Collapsible collapsed={expandedTwo}>
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
                      flexDirection: 'row',
                    }}>
                    <View style={{width: '60%', alignItems: 'center'}}>
                      <View style={{marginVertical: 2}}>
                        <Text style={{fontSize: 17}}>{item.activity_name}</Text>
                      </View>
                      <View style={{marginVertical: 2}}>
                        <Text style={{fontSize: 17}}> $ {item.price}</Text>
                      </View>
                      <View style={{marginVertical: 2}}>
                        <Text style={{fontSize: 17}}>{item.time}</Text>
                      </View>
                      <View style={{marginVertical: 2}}>
                        <Text style={{fontSize: 17}}>{item.type}</Text>
                      </View>
                    </View>
                    <View>
                      <Image
                        source={{uri: item.img_url}}
                        style={{width: 75, height: 75, marginTop:20}}
                      />
                    </View>
                  </View>
                ))}
            </View>
          </Collapsible>
          <View
            style={{marginVertical: 10, marginLeft: 20, alignItems: 'center'}}>
            <TouchableOpacity
              style={{
                backgroundColor: 'blue',
                padding: 10,
                borderRadius: 100,
                margin: 10,
                width: 250,
                alignItems: 'center',
              }}
              onPress={() => setExpandedThree(!expandedThree)}
              
              >
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                  fontFamily: 'Poppins-Medium',
                }}>
                Wednesday
              </Text>
            </TouchableOpacity>
          </View>
          <Collapsible collapsed={expandedThree}>
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
                      flexDirection: 'row',
                    }}>
                    <View style={{width: '60%', alignItems: 'center'}}>
                      <View style={{marginVertical: 2}}>
                        <Text style={{fontSize: 17}}>{item.activity_name}</Text>
                      </View>
                      <View style={{marginVertical: 2}}>
                        <Text style={{fontSize: 17}}> $ {item.price}</Text>
                      </View>
                      <View style={{marginVertical: 2}}>
                        <Text style={{fontSize: 17}}>{item.time}</Text>
                      </View>
                      <View style={{marginVertical: 2}}>
                        <Text style={{fontSize: 17}}>{item.type}</Text>
                      </View>
                    </View>
                    <View>
                      <Image
                        source={{uri: item.img_url}}
                        style={{width: 75, height: 75, marginTop:20}}
                      />
                    </View>
                  </View>
                ))}
            </View>
          </Collapsible>
          <View
            style={{marginVertical: 10, marginLeft: 20, alignItems: 'center'}}>
            <TouchableOpacity
              style={{
                backgroundColor: 'blue',
                padding: 10,
                borderRadius: 100,
                margin: 10,
                width: 250,
                alignItems: 'center',
              }}
              onPress={() => setExpandedFour(!expandedFour)}
              
              >
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                  fontFamily: 'Poppins-Medium',
                }}>
                Thursday
              </Text>
            </TouchableOpacity>
          </View>
          <Collapsible collapsed={expandedFour}>
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
                      flexDirection: 'row',
                    }}>
                    <View style={{width: '60%', alignItems: 'center'}}>
                      <View style={{marginVertical: 2}}>
                        <Text style={{fontSize: 17}}>{item.activity_name}</Text>
                      </View>
                      <View style={{marginVertical: 2}}>
                        <Text style={{fontSize: 17}}> $ {item.price}</Text>
                      </View>
                      <View style={{marginVertical: 2}}>
                        <Text style={{fontSize: 17}}>{item.time}</Text>
                      </View>
                      <View style={{marginVertical: 2}}>
                        <Text style={{fontSize: 17}}>{item.type}</Text>
                      </View>
                    </View>
                    <View>
                      <Image
                        source={{uri: item.img_url}}
                        style={{width: 75, height: 75, marginTop:20}}
                      />
                    </View>
                  </View>
                ))}
            </View>
          </Collapsible>

          <View
            style={{marginVertical: 10, marginLeft: 20, alignItems: 'center'}}>
            <TouchableOpacity
              style={{
                backgroundColor: 'blue',
                padding: 10,
                borderRadius: 100,
                margin: 10,
                width: 250,
                alignItems: 'center',
              }}
              onPress={() => setExpandedFive(!expandedFive)}
              
              >
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                  fontFamily: 'Poppins-Medium',
                }}>
                Friday
              </Text>
            </TouchableOpacity>
          </View>
          <Collapsible collapsed={expandedFive}>
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
                      flexDirection: 'row',
                    }}>
                    <View style={{width: '60%', alignItems: 'center'}}>
                      <View style={{marginVertical: 2}}>
                        <Text style={{fontSize: 17}}>{item.activity_name}</Text>
                      </View>
                      <View style={{marginVertical: 2}}>
                        <Text style={{fontSize: 17}}> $ {item.price}</Text>
                      </View>
                      <View style={{marginVertical: 2}}>
                        <Text style={{fontSize: 17}}>{item.time}</Text>
                      </View>
                      <View style={{marginVertical: 2}}>
                        <Text style={{fontSize: 17}}>{item.type}</Text>
                      </View>
                    </View>
                    <View>
                      <Image
                        source={{uri: item.img_url}}
                        style={{width: 75, height: 75, marginTop: 30}}
                      />
                    </View>
                  </View>
                ))}
            </View>
          </Collapsible>
        </View>
      </View>
    </ScrollView>
  );
};

export default TripDetails;
