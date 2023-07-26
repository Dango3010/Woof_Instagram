import React from 'react';
import { View, Text, TextInput, StyleSheet, Button, ScrollView } from 'react-native';
import {Formik, FieldArray, ErrorMessage} from 'formik';

export default function App() {
  
  return (
    <ScrollView style={{backgroundColor: '#ecf0f1'}}>
      <Text style={{marginTop: 50, fontSize: 20, textAlign: 'center'}}>Registration</Text>
        <Formik
          initialValues={{email: '', password: '', petName: '', petBirthDate: '', breed: '', favouriteToy: ''}}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid Email Address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
        {({handleChange, handleBlur, handleSubmit, values, handleReset, isSubmitting}) => (
          <View>
              <InputWithLabel
                label="Email"
                placeholder='Enter your email here'
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
              />
              <ErrorMessage style={{marginLeft: 40}} name='email' component={Text}/>
              <InputWithLabel
                label='password'
                placeholder="Type your password here"
                value={values.password}
                onChangeText={handleChange('password')}
                secureTextEntry
              />
              <ErrorMessage name='password' component={Text}/>
              <Button
                title='Submit'
                onPress={handleSubmit}
                disabled={isSubmitting}
              />
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

function confirmPassword (confirmPass, originalPassword) {
  confirmPass === originalPassword 
  ? true 
  : alert("Passwords do not match, please try again.");
};

const InputWithLabel = (props) => {
  return (
    <View style={{ padding: 16 }}>
      <Text style={{padding: 8, fontSize: 18, marginLeft: 10}}>
        {props.label}
      </Text>
      <TextInput
        style={{padding: 8, fontSize: 16, marginLeft: 10}}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        value={props.value}
        onBlur={props.onBlur}
        secureTextEntry={props.secureTextEntry}
        onSubmitEditing={props.onSubmitEditing}
      />
    </View>
  );
};



