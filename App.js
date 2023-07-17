import React, {useState} from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { Button } from 'react-native-web';

const App = () => (
  <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#ecf0f1'}}>
    <Text style={{fontSize: 18, marginTop: 50}}>Registration</Text>
    <ScrollView>
        <Input 
          title='Name of user'
          placeholder='John Smith'
          dataKey='userName'
        />
        <Input 
          title='email'
          placeholder="aa@gmail.com"
          dataKey='email'
        />
        <Input 
          title='password'
          placeholder='empty'
          dataKey='password'
        />
        <Input 
          title='type your password again'
          placeholder='empty'
          dataKey='passwordAgain'
        />
        <Input 
          title='Your Pet Name'
          placeholder='empty'
          dataKey='petName'
        />
        <Input 
          title="Your pet's birthdate"
          placeholder='empty'
          dataKey='petBirthDate'
        />
        <Input 
          title="Your pet's breed"
          placeholder='empty'
          dataKey='breed'
        />
        <Input 
          title="your pet's favourite toy"
          placeholder='empty'
          dataKey='FavouriteToy'
        />
    </ScrollView>
  </View>
);

export const Input = (props) => {
  const [data, setData] = useState({
    userName: '',
    email: '',
    password: '',
    passwordAgain: '',
    petName: '',
    petBirthDate: '',
    breed: '',
    FavouriteToy: ''
  });

  return (
    <View style={{padding: 16}}>
      <Text style={{padding: 8, fontSize: 18}}>
      {data.userName 
      ? `Hi! ${data.userName}` 
      : props.title}
      </Text>
      <TextInput
        style={{padding: 8, fontSize: 18}}
        value={data[props.dataKey]}
        secureTextEntry={props.dataKey === 'password' || props.dataKey === 'passwordAgain'}
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

