import React from 'react';
import { Text, TouchableOpacity} from 'react-native';
import buttonStyles from '../styles/buttonStyle'

export default function Button (props) {
  return (
    <TouchableOpacity
      accessible={true}
      accessibilityLabel={`Press to ${props.purpose} the form!`}
      onPress={props.onPress}
      disabled={props.disabled}
      style={buttonStyles.button}
    > 
      <Text style={buttonStyles.text}>{props.name}</Text>
    </TouchableOpacity>
  )
}

