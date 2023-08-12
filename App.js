import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// --- Main screens ---
const HomeScreen = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>Home Page</Text>
  </View>
)

const FeedScreen = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>Feed Page</Text>
  </View>
)

const CatalogScreen = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>Catalog Page</Text>
  </View>
)

const AccountScreen = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>Account Page</Text>
  </View>
)

const tab = createBottomTabNavigator();

const MainNavigator = () => (
  <tab.Navigator
    screenOptions={{
      headerStyle: {
        height: 80,
        backgroundColor: '#87CEFA'
      },
      headerTitleAlign: 'center'
    }}
  >
    <tab.Screen 
      name='Home'
      component={HomeScreen}
    />
    <tab.Screen 
      name='Feed'
      component={FeedScreen}
    />
    <tab.Screen 
      name='Catalog'
      component={CatalogScreen}
    />
    <tab.Screen 
      name='Account'
      component={AccountScreen}
    />
  </tab.Navigator>
)

// --- Onboarding screens ---
const Stack = createStackNavigator();

const StackButton = (props) => {
  const nav = useNavigation();

  return (
    <Button 
      title={`Go to ${props.to} Page`}
      onPress={() => nav.navigate(props.to)}
    />
  );
}

const SignInScreen = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>Sign In</Text>
    <StackButton to='Sign Up'/>
  </View>
);

const SignUpScreen = () => (
  <View style={styles.layout}>
    <Text style={styles.title}>Sign Up</Text>
    <StackButton to='Main'/>
  </View>
)

const StackNavigation = () => (
  <Stack.Navigator 
    screenOptions={{headerMode: 'none'}}
  >
    <Stack.Screen
      name='Sign In'
      component={SignInScreen}
    />
    <Stack.Screen
      name='Sign Up'
      component={SignUpScreen}
    />
    <Stack.Screen
      name='Main'
      component={MainNavigator}
    />
  </Stack.Navigator>
)

// --- App ---

const App = () => (
  <NavigationContainer>
    <StackNavigation />
  </NavigationContainer>
);

export default App;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
