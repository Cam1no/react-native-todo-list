import React, { Component } from 'react';
import {
  Container, Header,
  Title, Body,
  View, Content,
  Form, Item,
  Input, Button,
  Text, Footer,
} from 'native-base';
import firebase from 'firebase';
import firebaseConfig from './src/config/firebase';

firebase.initializeApp(firebaseConfig);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      user: {},
    }
  }

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Login Form</Title>
          </Body>
        </Header>
        <Content>
          <Form>
            <Item>
              <Input
                placeholder='Email'
                onChangeText={email => this.setState({ email })}
              />
            </Item>
            <Item last>
              <Input
                placeholder='Password'
                onChangeText={password => this.setState({ password })}
              />
            </Item>
            <Button primary full onPress={() => this._handleSubmit()} >
              <Text>Register</Text>
            </Button>
          </Form>
        </Content>
        <Footer />
      </Container>
    );
  }

  _handleSubmit = () => {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(user => {
        this.setState({ user: user, email :null, password: null });
      })
      .catch((error) => {
        console.log("firebase error", error);
      });
  }
}
