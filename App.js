import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import {Formik, Field, Form, FieldArray, ErrorMessage} from 'formik';

export default function App() {
  
  return (
    <ScrollView style={{backgroundColor: '#ecf0f1'}}>
      <Text style={{fontSize: 20, marginTop: 50}}>Registration</Text>
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
        {({isSubmitting}) => (
          <Form style={{padding: 16, flex: 1}}>
          
            <div className='row'>
              <div className='col'>
                <label 
                  style={{padding: 8, fontSize: 20}}
                  htmlFor="firstName"
                >
                  Email
                </label>
                <Field 
                  style={styles.field}
                  type='email' 
                  name='email' 
                  placeholder='Enter your email here'
                  />
              </div>
                <ErrorMessage name='email' component='div'/>

              <div className='col'>
                <Field 
                  style={styles.field}
                  type='password' 
                  name='password' 
                />
                <ErrorMessage name='password' component='div'/>
              </div>

              <div className='col'>
                <Field 
                  style={styles.field}
                  type='petName' 
                  name='petName' 
                />
              </div>

              <div className='col'>
                <Field 
                  type='petBirthDate' 
                  name='petBirthDate'
                  style={styles.field}  
                />
              </div>

              <div className='col'>
                <Field 
                  type='breed' 
                  name='breed' 
                  style={styles.field}  
                />
              </div>

              <div className='col'>
                <Field 
                  type='favouriteToy' 
                  name='favouriteToy' 
                  style={styles.field}
                />
              </div>

              <div className='col'>
                <button 
                  type='submit' 
                  disabled={isSubmitting}
                  style={styles.field}
                >
                  Submit
                </button>
              </div>

            </div>
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

const styles = StyleSheet.create({
  field: {
    padding: 8, 
    fontSize: 18,
    margin: 10
  }
})

