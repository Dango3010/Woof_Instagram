// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Image } from 'react-native'; //View and Text = core components

// const image = require('./src/images/corn.jpeg');

// export default function App() {
//   return (
//     <View style={styles.container}> 
//       <Text 
//       style={{
//         fontWeight: 'bold', 
//         backgroundColor: 'yellow',
//         marginBottom: '20px'
//         }}
//       >
//       How are you???
//       </Text>

//       <Image 
//         style={{width: 100, height: 100}} 
//         source={image} 
//       />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFF',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React, {useState} from 'react';
import { Button, Text, View, ScrollView, TextInput } from 'react-native';

const App = () => {
  const [pressedButton, setPressedButton] = useState(0);
  const [name, setName] = useState('');

  return (
   <View style={{ flex: 1, justifyContent: 'center' }}>
    <Text style={{ fontSize: 24, textAlign: 'center' }}>
      Scroll me!
    </Text>
    <View style={{ height: 400, backgroundColor: '#e5e5e5' }}>
      {/* This is our scrollable area */}
      <ScrollView horizontal={false}>
        {/* remove horizontal if u want ur content to be scrollable vertically */}
        <View style={{ width: 300, height: 300, backgroundColor: 'red' }} />
        <View style={{ width: 300, height: 300, backgroundColor: 'green' }} />
        <View style={{ width: 300, height: 300, backgroundColor: 'blue' }} />
        <Button
          title='Click me!'
          onPress={() => setPressedButton(pressedButton + 1)}
          disabled={pressedButton >= 2}
        />
        <Text>
          {pressedButton >= 1 
          ? `the button is pressed ${pressedButton} times`
          : 'the button isn\'t pressed yet'}
        </Text>

        <Button
          title='Reset!'
          onPress={() => setPressedButton(0)}
        />

        <Text>
          {name ? `hi, ${name}` : "What's your name?"}
        </Text>
        
        <TextInput
          onChangeText={text => setName(text)}
          secureTextEntry={true}
        />
      </ScrollView>
    </View>
  </View>
)};

export default App;

