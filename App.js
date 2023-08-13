import React, {createContext, useContext, useState} from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import LogInScreen from './src/screens/Login'
import RegistrationScreen from './src/screens/Registration'
import homeStyles from './src/styles/homepage/home'
import HomeScreen from './src/screens/home'

export const AuthContext = createContext({
  hasUser: false,
  setUser: () => {},
});

const App = () => {
  const [hasUser, setUser] = useState(false);
  
  return (
    <AuthContext.Provider value={{hasUser, setUser}}>
      <SafeAreaView style={homeStyles.home}>
        <HomeScreen />
      </SafeAreaView>
    </AuthContext.Provider>
  );
}

export default App;
