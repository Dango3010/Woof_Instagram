import React, {useState} from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button } from 'react-native-web';

const App = () => (
  <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#ecf0f1' }}>
  <Text>Registration</Text>
    <Input 
      placeholder='name of user'
      dataKey='userName'
    />
    <Input 
      placeholder='email'
      dataKey='email'
    />
    <Input 
      placeholder='password'
      dataKey='password'
    />
    <Input 
      placeholder='pet Name'
      dataKey='petName'
    />
    <Input 
      placeholder="pet's birthdate"
      dataKey='petBirthDate'
    />
    <Input 
      placeholder='breed'
      dataKey='breed'
    />
    <Input 
      placeholder="pet's favourite toy"
      dataKey='FavouriteToy'
    />
  </View>
);

export const Input = (props) => {
  const [data, setData] = useState({
    userName: '',
    email: '',
    password: '',
    petName: '',
    petBirthDate: '',
    breed: '',
    FavouriteToy: ''
  });

  return (
    <View>
      {props.dataKey === 'userName' && 
        <Text>{data.userName ? `Hi! ${data.userName}` : 'Hi! What is your name?'}</Text>
      }
      <TextInput
        value={data[props.dataKey]}
        secureTextEntry={props.dataKey === 'password'}
        placeholder={props.placeholder}
        onChangeText={text => {
          setData(prev => ({
            ...prev,
            [props.dataKey] : text
          }))
        }}
      />
    </View>
  )
}

export default App;

