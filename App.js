import React, {useState} from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { Button } from 'react-native-web';
// import Input from './src/components/Form';

export default function App() {
  const [input, setInput] = useState({
    email: '',
    password: '',
    petName: '',
    petBirthDate: '',
    breed: '',
    favouriteToy: ''
  });

  return (
    <ScrollView style={{backgroundColor: '#ecf0f1'}}>
      <Text style={{fontSize: 18, marginTop: 50}}>Registration</Text>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <InputWithLabel
          label='Email'
          placeholder='Type your email here'
          value={input.email}
          onChangeText={text => {
            setInput(prev => ({
              ...prev,
              email : text
            }))
          }}
        />
        <InputWithLabel
          label='Password'
          placeholder="type your password here"
          value={input.password}
          onChangeText={text => {
            setInput(prev => ({
              ...prev,
              password : text
            }))
          }}
          secureTextEntry
        />
        <InputWithLabel
          label='Confirm password'
          placeholder='re-type your password here'
          onSubmitEditing={(e) => confirmPassword(e.nativeEvent.text, input.password)}
          secureTextEntry
        />
        <InputWithLabel
          label='Pet Name'
          value={input.petName}
          placeholder="type your pet's name here"
          onChangeText={text => {
            setInput(prev => ({
              ...prev,
              petName : text
            }))
          }}
        />
        <InputWithLabel
          label='Pet Birthday'
          value={input.petBirthDate}
          placeholder="type your pet's date of birth here"
          onChangeText={text => {
            setInput(prev => ({
              ...prev,
              petBirthDate : text
            }))
          }}
        />
        <InputWithLabel
          label='Breed'
          placeholder="type your pet's breed here"
          value={input.breed}
          onChangeText={text => {
            setInput(prev => ({
              ...prev,
              breed : text
            }))
          }}
        />
        <InputWithLabel
          label='Toy'
          placeholder="type your pet's favourite toy here"
          value={input.favouriteToy}
          onChangeText={text => {
            setInput(prev => ({
              ...prev,
              favouriteToy : text
            }))
          }}
        />
      </View>
    </ScrollView>
  );
};

function confirmPassword (confirmPass, originalPassword) {
  confirmPass === originalPassword 
  ? true 
  : alert("Passwords do not match, please try again.");
};

export function InputWithLabel (props) {
  return (
    <View style={{padding: 16}}>
      <Text style={{padding: 8, fontSize: 18}}>{props.label}</Text>
      <TextInput
        style={{padding: 8, fontSize: 16}}
        value={props.value}
        secureTextEntry={props.secureTextEntry}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        onSubmitEditing={props.onSubmitEditing}
      />
    </View>
  );
};