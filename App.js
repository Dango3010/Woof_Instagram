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
      <Text>{data[props.dataKey] ? `Hi! ${data[props.dataKey]}` : 'Hi! What is your name?'}</Text>
      <TextInput
        value={data[props.dataKey]}
        placeholder={props.placeholder}
        onChangeText={text => {
          setData(prev => ({
            ...prev,
            [props.dataKey] : text
          }))
        }}
      />
      <Button
        title='press ehhh'
        onPress={() => console.log(data)}
      />
    </View>
  )
}

export default App;

