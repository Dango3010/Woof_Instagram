import React from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import {Formik, Field, Form, FieldArray, ErrorMessage} from 'formik';

export default function App() {
  
  return (
    <ScrollView style={{backgroundColor: '#ecf0f1'}}>
      <Text style={{fontSize: 18, marginTop: 50}}>Registration</Text>
      <Formik 
        style={{flex: 1, justifyContent: 'center'}}
        initialValues={{email: '', password: '', petName: '', petBirthDate: '', breed: '', favouriteToy: ''}}
        vaildate={values => {
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
      {({isSubmitting}) => (
        <Form>
          <Field type='email' name='email' />
          <ErrorMessage name='email' component='div'/>
          <Field type='password' name='password' />
          <ErrorMessage name='password' component='div'/>
          <Field type='petName' name='petName' />
          <Field type='petBirthDate' name='petBirthDate' />
          <Field type='breed' name='breed' />
          <Field type='favouriteToy' name='favouriteToy' />
          <button type='submit' disabled={isSubmitting}>
            Submit
          </button>
        </Form>
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

