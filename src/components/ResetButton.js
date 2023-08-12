import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default ResetButton = (props) => {
  return (
    <TouchableOpacity
      accessible={true}
      accessibilityLabel="Press to reset the form!"
      onPress={props.handleReset}
    > 
      <Text style={{padding: 8, fontSize: 15, marginLeft: 10}}>
        Click here to reset the Form!
        <View style={{paddingLeft: 6}}>
          <AntDesign
            size={25}
            name="closecircleo"
            color="black"
          />
        </View>
      </Text>
    </TouchableOpacity>
  )
}