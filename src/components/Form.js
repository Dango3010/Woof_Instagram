import React, {useState} from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { Button } from 'react-native-web';

export default function Input (props) {
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

