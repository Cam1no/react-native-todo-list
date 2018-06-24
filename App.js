import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import thunk from 'redux-thunk';
import reducers from './src/reducers';
import RootNavigator from './src/RootNavigator';
import firebaseConfig from './src/config/firebase';

firebase.initializeApp(firebaseConfig);

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    );
  }
}
