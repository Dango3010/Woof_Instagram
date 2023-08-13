import { Formik } from 'formik';
import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import * as Yup from 'yup'; //to validate the inputs
import InputWithLabel from '../components/Input'
import Button from '../components/Button'
import styles from '../styles/generalStyles'
import homeStyles from '../styles/generalStyles'
import users from '../fake-API/users'

export default function LogInScreen(props) {

  const nav = props.navigation;
  
  return (
    <ScrollView style={homeStyles.authenPage}>
      <Text style={styles.title}>Welcome! Please Log In</Text>
        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().required('Required'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
              users.findIndex(user => user.email === values.email && user.password === values.password) < 0
                ? alert('Invalid User, Please Try Again') 
                : nav.navigate('Home');
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
                name='Submit'
                onPress={handleSubmit}
                disabled={isSubmitting}
              />
              <Button
                name='Register'
                onPress={() => nav.navigate('Register')}
              />
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};