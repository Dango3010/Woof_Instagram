import React from 'react';
import { Image, Text, View } from 'react-native';
import woofPostStyles from '../../styles/homepage/WoofPostStyle';

export default function WoofPost (props) {
  return (
    <View style={woofPostStyles.layout}>
      <Image 
        style={woofPostStyles.image} 
        source={{ uri: props.url }}
      />

      <View style={woofPostStyles.content}>
        <Text style={woofPostStyles.title}>
          {props.title}
        </Text>
        <Text style={woofPostStyles.description}>
          {props.description}
        </Text>
      </View>
    </View>
  );
}

