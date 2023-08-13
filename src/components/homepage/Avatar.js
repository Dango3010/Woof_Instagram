import * as React from 'react';
import { Image } from 'react-native';
import homeStyles from '../../styles/homepage/home'

//used in homePage
export default function Avatar (props) {
  return (
    <Image
      style={homeStyles.avatar}
      source={{ uri: props.url }}
    />
  );
}
