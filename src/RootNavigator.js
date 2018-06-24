import React from 'react';
import { createStackNavigator } from 'react-navigation';
import SignUpScreen from './screens/SignUpScreen';

const RootNavigator = createStackNavigator({
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: {
      headerTitle: 'Register',
    },
  },
});


export default RootNavigator;
