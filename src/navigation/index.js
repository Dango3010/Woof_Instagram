import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RegistrationScreen from '../screens/Registration';
import LoginScreen from '../screens/Login';
import HomeScreen from '../screens/Home';
import screenHeader from '../styles/screenHeader'

const stack = createStackNavigator();

export default function StackNavigator () {

  return (
    <stack.Navigator>
      <stack.Screen 
        name='Log In' 
        component={LoginScreen} 
        options={screenHeader}
      />
      <stack.Screen 
        name='Register' 
        component={RegistrationScreen}
        options={{...screenHeader, title: 'Register for an account'}}
      />
      <stack.Screen 
        name='Home' 
        component={HomeScreen}
        options={{...screenHeader, title: 'Home Page'}}
      />
    </stack.Navigator>
  );
}
