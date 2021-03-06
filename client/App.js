import React from 'react';
// import { StyleSheet } from 'react-native';
import Home from './components/pages/home'
import Login from './components/pages/login'
import Signup from './components/pages/signUp'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function App() {
  return (

    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
          />
           <Stack.Screen
            name="Signup"
            component={Signup}
          />
           <Stack.Screen
            name="Login"
            component={Login}
          />
        </Stack.Navigator>

      </NavigationContainer>


  );
}


