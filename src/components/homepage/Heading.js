import React from 'react';
import { Text } from 'react-native';
import homeStyles from '../../styles/homepage/home'

export default function Heading (props) {
  return (
    <Text style={homeStyles.heading}>
      {props.children}
    </Text>
  );
}

