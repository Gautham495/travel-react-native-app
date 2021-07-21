import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider as PaperProvider} from 'react-native-paper';
import FriendIcon from './Assets/friendsIcon.svg';
import ProfileIcon from './Assets/profileIcon.svg';
import DiamondIcon from './Assets/diamondIcon.svg';

import Login from './Components/Login/Login';
import Destination from './Components/OnBoarding/Destination';
import PersonalInterest from './Components/OnBoarding/PersonalInterest';
import PreferredActivities from './Components/OnBoarding/PreferredActivities';
import ProfileInfo from './Components/OnBoarding/ProfileInfo';
import SearchDestination from './Components/OnBoarding/SearchDestination';

import Profile from './Components/Profile/Profile';
import TopTravels from './Components/TopTravels/TopTravels';
import TripCarousel from './Components/TripCarousel/TripCarousel';
import TripDetails from './Components/TripDetails/TripDetails';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function PrimaryStack() {
  return (
    // <Provider store={store}>
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Destination" component={Destination} />

      <Stack.Screen name="PersonalInterest" component={PersonalInterest} />
      <Stack.Screen
        name="PreferredActivities"
        component={PreferredActivities}
      />
      <Stack.Screen
        name="ProfileInfo"
        component={ProfileInfo}
        options={{headerShown: false}}
      />
      <Stack.Screen name="SearchDestination" component={SearchDestination} />
      <Stack.Screen name="TopTravels" component={TopTravels} />
      <Stack.Screen
        name="TripCarousel"
        component={TripCarousel}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TripDetails"
        options={{headerShown: false}}
        component={TripDetails}
      />
    </Stack.Navigator>
  );
}

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <Image
              source={require('./Assets/planning.png')}
              style={{
                width: 30,
                height: 30,
              }}
            />
          ),
        }}
        name="Plan"
        component={PrimaryStack}
      />

      <Tab.Screen
        options={{
          tabBarIcon: () => <DiamondIcon width={38} height={38} fill="#000" />,
        }}
        name="TopTrips"
        component={TopTravels}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <ProfileIcon width={38} height={38} fill="#000" />,
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
