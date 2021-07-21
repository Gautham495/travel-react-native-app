import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Button,
  Image
} from 'react-native';
import {getShadow} from '../../utils/Shadow.js';
import Swiper from 'react-native-deck-swiper';
import {Card, IconButton, OverlayLabel} from '../Component';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 10) / 4);

const data = [{name: '1'}, {name: '2'}, {name: '3'}];

const TripCarousel = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Swiper
        cards={['Hiking', 'Snowing', 'swimming', 'MAKES', 'YOU', 'HAPPY']}
        renderCard={card => {
          return (
            <View style={styles.card}>
              <View>
               <Image
              source={require('../../Assets/plane.png')}
              style={{width:150, height: 150, marginBottom: 20}}
               />
               </View>
               <View>
               <View>
                 <Text>{card}</Text>
               </View>
               {/* <View>
                 <Text>$150</Text>
               </View> */}
               </View>
            </View>
          );
        }}
        // onSwiped={(cardIndex) => {console.log(cardIndex)}}
        onSwipedAll={() => {alert('onSwipedAll')}}
        // onSwipedLeft = {(e)=>console.log(e)}
        onSwipedRight={cardIndex => {
          // i = i+1
          // console.log(i);
          navigation.navigate('TripDetails');
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
    alignItems:'center'
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


[{url:'',name:'',price:'',details:'', 

data:
 [{day:'Monday',timings:[{timing:'1 pm', details:'Hiking'},
{timing:'5pm',details:'Going To Hotel'}]},{},{} ] }, 



{  }, {}]

users = [{name:'123',destination:'1231'}]

[{url:'',name:'',price:'',details:''}]

