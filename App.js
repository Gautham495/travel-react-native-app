import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider as PaperProvider} from 'react-native-paper';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function PrimaryStack() {
  return (
    // <Provider store={store}>
    <Stack.Navigator>
      {/* <Stack.Screen name="11th" component={Eleventh} /> */}
    </Stack.Navigator>
  );}

  // const BottomTab = () => {
  //   return (
  //     <Tab.Navigator>
  //       <Tab.Screen
  //         options={{
  //           tabBarIcon: () => (
  //             <Image
  //               source={require('./Assets/notes.png')}
  //               style={{
  //                 width: 30,
  //                 height: 30,
  //               }}
  //             />
  //           ),
  //         }}
  //         name="Notes"
  //         component={PrimaryStack}
  //       />
  //       <Tab.Screen
  //         options={{
  //           tabBarIcon: () => (
  //             <Image
  //               source={require('./Assets/money.png')}
  //               style={{
  //                 width: 30,
  //                 height: 30,
  //               }}
  //             />
  //           ),
  //         }}
  //         name="Buy Notes"
  //         component={ContactStack}
  //       />
  //       <Tab.Screen
  //         options={{
  //           tabBarIcon: () => (
  //             <Image
  //               source={require('./Assets/phone.png')}
  //               style={{
  //                 width: 30,
  //                 height: 30,
  //               }}
  //             />
  //           ),
  //         }}
  //         name="Contact"
  //         component={NameStack}
  //       />
  //       <Tab.Screen
  //         options={{
  //           tabBarIcon: () => (
  //             <Image
  //               source={require('./Assets/profile.png')}
  //               style={{
  //                 width: 30,
  //                 height: 30,
  //               }}
  //             />
  //           ),
  //         }}
  //         name="Profile"
  //         component={ProfileStack}
  //       />
  //     </Tab.Navigator>
  //   );
  // };

const App = () => {
  return (
    <View>
      {/* <NavigationContainer>
          <NotesDrawer />
        </NavigationContainer> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
