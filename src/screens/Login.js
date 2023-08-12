import { Formik } from 'formik';
import React from 'react';
import { Button, Text, View } from 'react-native';
import * as Yup from 'yup'; //to validate the inputs
import InputWithLabel from '../components/Input'
import styles from '../styles/generalStyles'

export default function LogInScreen() {
  
  return (
    <View style={{flex: 1, backgroundColor: '#ecf0f1'}}>
      <Text style={styles.title}>Log In</Text>
        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().required('Required'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
        {({handleChange, handleBlur, handleSubmit, values, isSubmitting, errors, touched}) => (
          <View>
              <InputWithLabel
                label="Email"
                name='email'
                placeholder='Enter your email here'
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                errors={errors}
                touched={touched}
              />
              
              <InputWithLabel
                label='Password'
                name='password'
                placeholder="Type your password here"
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                secureTextEntry
                errors={errors}
                touched={touched}
              />

              <Button
                title='Submit'
                onPress={handleSubmit}
                disabled={isSubmitting}
              />
          </View>
        )}
      </Formik>
    </View>
  );
};