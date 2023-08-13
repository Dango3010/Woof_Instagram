import * as React from 'react';
import { Text, View } from 'react-native';
import Avatar from '../homepage/Avatar'
import woofCardStyles from '../../styles/homepage/woofCardStyles'

export default function WoofCard (props) {
  return (
  <View style={woofCardStyles.card}>
    <Avatar url={props.url}/>
    <Text style={woofCardStyles.title}>
      {props.name}
    </Text>
  </View>
  );
}
