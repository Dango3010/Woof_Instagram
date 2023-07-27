import React from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import {Formik, FieldArray, ErrorMessage} from 'formik';
import * as Yup from 'yup';

export default function App() {
  
  return (
    <ScrollView style={{backgroundColor: '#ecf0f1'}}>
      <Text style={{marginTop: 50, fontSize: 20, textAlign: 'center'}}>Registration</Text>
        <Formik
          initialValues={{email: '', password: '', confirmPassword: '', petName: '', petBirthDate: '', breed: '', favouriteToy: ''}}
          validationSchema={Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().required('Required'),
            confirmPassword: Yup.string()
              .required('Required')
              .oneOf([Yup.ref('password')], 'Passwords do not match, please try again.'),
            petName: Yup.string().required('Required'),
            petBirthDate: Yup.string().required('Required'),
            breed: Yup.string().required('Required'),
            favouriteToy: Yup.string().required('Required')
          })}
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
                name='email'
                placeholder='Enter your email here'
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
              />
              
              <InputWithLabel
                label='Password'
                name='password'
                placeholder="Type your password here"
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                secureTextEntry
              />

              <InputWithLabel
                label='Confirm Password'
                name='confirmPassword'
                placeholder="Re-type your password here"
                onChangeText={handleChange('confirmPassword')}
                secureTextEntry
              />

              <InputWithLabel
                label="Name"
                name='petName'
                placeholder="Type your dog's name here"
                value={values.petName}
                onChangeText={handleChange('petName')}
              />
              
              <InputWithLabel
                label='Birthday'
                name='petBirthDate'
                placeholder="Type your dog's date of birth here"
                value={values.petBirthDate}
                onChangeText={handleChange('petBirthDate')}
              />

              <InputWithLabel
                label='Breed'
                name='breed'
                placeholder="Type your dog's breed here"
                value={values.breed}
                onChangeText={handleChange('breed')}
              />

              <InputWithLabel
                label='Favourite toy'
                name='favouriteToy'
                placeholder="Type your dog's favorite toy here"
                value={values.favouriteToy}
                onChangeText={handleChange('favouriteToy')}
              />

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

const InputWithLabel = (props) => {
  return (
    <View style={{ padding: 16 }}>
      <Text style={{padding: 8, fontSize: 18, marginLeft: 10}}>
        {props.label}
      </Text>
      <TextInput
        style={{padding: 8, fontSize: 16, marginLeft: 10}}
        name={props.name}
        onChangeText={props.onChangeText}
        value={props.value}
        placeholder={props.placeholder}
        onBlur={props.onBlur}
        secureTextEntry={props.secureTextEntry}
      />
      <ErrorMessage style={{marginLeft: 18, color: 'red'}} name={props.name} component={Text}/>
    </View>
  );
};

