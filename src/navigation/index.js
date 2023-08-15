import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome5 } from 'react-native-vector-icons'; //import icons to use
import RegistrationScreen from '../screens/Registration';
import LoginScreen from '../screens/Login';
import HomeScreen from '../screens/home';
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
        options={{...screenHeader, 
          title: 'Register for an account',
          headerRight: () => (
            <FontAwesome5
              style={{marginRight: 30}}
              name='dog'
              size={24}
              color='black'
            />
          )
        }}
      />
      <stack.Screen 
        name='Home' 
        component={HomeScreen}
        options={{...screenHeader, 
          title: 'Home Page',
        }}
      />
    </stack.Navigator>
  );
}
