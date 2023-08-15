import React from 'react';
import * as Yup from 'yup'; //to validate the inputs
import { View, ScrollView, Image } from 'react-native';
import { Formik } from 'formik';
import InputWithLabel from '../components/InputWithLabel'
import Button from '../components/Button'
import homeStyles from '../styles/homepage/home'
import users from '../fake-API/users'

const image = require('../image/shiba.png');

export default function LogInScreen(props) {

  const nav = props.navigation;

  return (
    <ScrollView style={homeStyles.authenPage}>
      <Formik
        initialValues={{ email: '', password: '' }}
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
        {({ handleChange, handleBlur, handleSubmit, values, isSubmitting, errors, touched }) => (
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
      <Image
        style={{ height: 250, width: 250, resizeMode: 'contain', margin: 75}}
        source={image}
      />
    </ScrollView>
  );
};