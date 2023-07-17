import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Input from './src/components/Form';

export default function App() {
  return (
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
}
