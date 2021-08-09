import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import {getShadow} from '../../utils/Shadow.js';
import Swiper from 'react-native-deck-swiper';
import {OverlayLabel} from '../Component';
import firestore from '@react-native-firebase/firestore';


const TripCarousel = ({navigation}) => {
  const [descriptionData, setDescriptionData] = useState([]);

  const [counter, setCounter] = useState(0);

  const getDescriptions = async () => {
    const description = await firestore().collection('activities').get();
    console.log(description.docs.map(item => item.data()));

    setDescriptionData(description.docs.map(item => item.data()));
  };

  useEffect(() => {
    getDescriptions();
  }, []);

  return (
    <View style={styles.container}>
      <Swiper
        cards={descriptionData}
        renderCard={card =>
          (card && (
            <View style={styles.card}>
              <View style={{margin: 20}}>
                <Image
                  source={{
                    uri: card.img,
                  }}
                  style={{
                    width: Dimensions.get('window').width - 50,
                    height: 250,
                  }}
                />
              </View>
              <View style={{alignItems: 'center', margin: 10}}>
                <Text style={{fontSize: 18, fontFamily: 'Poppins-Medium'}}>
                  Location : {card.location}
                </Text>
              </View>
              <View
                style={{
                  margin: 10,
                  padding: 10,
                  borderRadius: 10,
                  ...getShadow(1),
                }}>
                <View>
                  <Text style={{fontFamily: 'Poppins-Medium'}}>
                    {card.name}
                  </Text>
                </View>
                <View>
                  <Text style={{fontFamily: 'Poppins-Medium'}}>
                    Price : $ {card.price}
                  </Text>
                </View>
              </View>
              <View>
                <View style={{margin: 5}}>
                  <Text style={{fontSize: 16, fontFamily: 'Poppins-Medium'}}>
                    {card.description}
                  </Text>
                </View>
              </View>
            </View>
          )) ||
          null
        }
        onSwipedAll={() => {
          alert('onSwipedAll');
        }}
        onSwipedRight={cardIndex => {
          setCounter(counter + 1);
          if (counter > 4) {
            navigation.navigate('TripDetails');
          }
        }}
        cardIndex={0}
        backgroundColor={'#fff'}
        stackSize={7}
        overlayLabels={{
          left: {
            title: 'NOPE',
            element: <OverlayLabel label="NOPE" color="#E5566D" />,
            style: {
              wrapper: styles.overlayWrapper,
            },
          },
          right: {
            title: 'LIKE',
            element: <OverlayLabel label="LIKE" color="#4CCC93" />,
            style: {
              wrapper: {
                ...styles.overlayWrapper,
                alignItems: 'flex-start',
                marginLeft: 30,
              },
            },
          },
        }}></Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  cardContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 10,
    marginBottom: 10,
    height: 160,
    borderRadius: 20,
    backgroundColor: '#fff',
    ...getShadow(3),
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
  },
});

export default TripCarousel;

[
  {
    url: '',
    name: '',
    price: '',
    details: '',

    data: [
      {
        day: 'Monday',
        timings: [
          {timing: '1 pm', details: 'Hiking'},
          {timing: '5pm', details: 'Going To Hotel'},
        ],
      },
      {},
      {},
    ],
  },

  {},
  {},
];

users = [{name: '123', destination: '1231'}][
  {url: '', name: '', price: '', details: ''}
];
