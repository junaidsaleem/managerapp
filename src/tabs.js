import React, { Component } from 'react';
import Login from './loginFrom';
import Signup from './signupFrom';
import { StackNavigator } from 'react-navigation';


const NavigationApp = createStackNavigator({
    Login: { screen: LoginScreen },
    SignUp: { screen: SignupScreen }
});
  
export default createAppContainer(NavigationApp);
