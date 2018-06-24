import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Button,
  Text,
  Footer,
} from 'native-base';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { NavigationActions, StackActions } from 'react-navigation';
import { changeEmail, changePassowrd } from '../actions/currentUser';

class SignUpScreen extends Component {
  render() {
    console.log(this.props);
    const { changeEmail, changePassowrd } = this.props;

    return (
      <Container>
        <Content>
          <Form>
            <Item>
              <Input
                placeholder="Email"
                onChangeText={email => changeEmail(email)}
              />
            </Item>
            <Item last>
              <Input
                placeholder="Password"
                onChangeText={password => changePassowrd(password)}
              />
            </Item>
            <Button primary full onPress={() => this.handleSignUp()}>
              <Text>
                Register
              </Text>
            </Button>
          </Form>
        </Content>
        <Footer />
      </Container>
    );
  }

  handleSignUp = () => {
    const { currentUser, navigation } = this.props;
    const { email, password } = currentUser;
    const { navigate } = navigation;
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'TodoList' })],
    });

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
        navigation.dispatch(resetAction);
        navigate('TodoList');
      })
      .catch((error) => {
        console.log('firebase error', error);
      });
  }
}

SignUpScreen.propTypes = {
  changeEmail: PropTypes.func,
  changePassowrd: PropTypes.func,
  currentUser: PropTypes.object,
  navigation: PropTypes.object,
};

const mapSstateToProps = state => ({ currentUser: state.currentUser });

export default connect(mapSstateToProps, { changeEmail, changePassowrd })(SignUpScreen);
