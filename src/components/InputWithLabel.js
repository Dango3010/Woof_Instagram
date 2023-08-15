import { ErrorMessage } from 'formik';
import React from 'react';
import { Text, TextInput, View } from 'react-native';

//render each input of the form
export default function InputWithLabel (props) {

  const moreStyle = props.errors[props.name] && props.touched[props.name] 
    ? {borderWidth: 2, borderColor: 'red'} 
    : {};

  return (
    <View style={{ padding: 16 }}>
      <Text style={{padding: 8, fontSize: 18, marginLeft: 10, fontWeight: 'bold'}}>
        {props.label}
      </Text>
      <TextInput
        style={{padding: 8, fontSize: 16, marginLeft: 11, ...moreStyle}}
        name={props.name}
        onChangeText={props.onChangeText}
        value={props.value}
        placeholder={props.placeholder}
        onBlur={props.onBlur}
        secureTextEntry={props.secureTextEntry}
      />
      <ErrorMessage style={{padding: 8, marginLeft: 10, color: 'red'}} name={props.name} component={Text}/>
    </View>
  );
};