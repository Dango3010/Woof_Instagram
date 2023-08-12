import React, {createContext, useContext, useState} from 'react';
import { View, Text } from 'react-native';
import LogInScreen from './src/screens/Login'
import RegistrationScreen from './src/screens/Registration'

export const AuthContext = createContext({
  hasUser: false,
  setUser: () => {},
});

const App = () => {
  const [hasUser, setUser] = useState(false);
  
  return (
    <AuthContext.Provider value={{hasUser, setUser}}>
    <>
      <RegistrationScreen />
    </>
    </AuthContext.Provider>
  );
}

export default App;
