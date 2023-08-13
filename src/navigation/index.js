import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RegistrationScreen from '../screens/Registration';
import LoginScreen from '../screens/Login';
import HomeScreen from '../screens/home';

const stack = createStackNavigator();

export default function StackNavigator () {

  return (
    <stack.Navigator screenOptions={{headerMode: 'none'}}>
      <stack.Screen name='Log In' component={LoginScreen} />
      <stack.Screen name='Home' component={HomeScreen} />
      <stack.Screen name='Register' component={RegistrationScreen} />
    </stack.Navigator>
  );
}
