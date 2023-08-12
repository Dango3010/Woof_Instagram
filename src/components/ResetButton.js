import React from 'react';
import { Text, TouchableOpacity} from 'react-native';
import buttonStyles from '../styles/buttonStyle'

export default function ResetButton (props) {
  return (
    <TouchableOpacity
      accessible={true}
      accessibilityLabel="Press to reset the form!"
      onPress={props.handleReset}
      style={buttonStyles.resetButton}
    > 
      <Text style={buttonStyles.text}>RESET THE FORM</Text>
    </TouchableOpacity>
  )
}

