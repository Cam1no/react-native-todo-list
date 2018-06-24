import React from 'react';
import { View, Text } from 'react-native';
import { Container, Header, Body, Title, Footer } from 'native-base';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import reducers from './src/reducers/';
// import RootNavigator from './src/RootNavigator';
import thunk from 'redux-thunk';
import firebase from 'firebase';
import firebaseConfig from './src/config/firebase';

firebase.initializeApp(firebaseConfig);

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)),);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View><Text>HelloWorld</Text></View>
      </Provider>
    );
  }
}
