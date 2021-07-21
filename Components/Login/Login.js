import React from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const Login = ({navigation}) => {
  return (
    <View style={{alignItems: 'center', marginTop:300}}>
      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          padding: 20,
          borderRadius: 100,
          margin: 10,
          width:250,
          alignItems:'center'
        }}
        onPress={()=>navigation.navigate('ProfileInfo')}
        >
        <Text style={{fontSize:20, color:'white'}}> Lets Get Started</Text>
      </TouchableOpacity>
    
    </View>
  );
};

export default Login;
