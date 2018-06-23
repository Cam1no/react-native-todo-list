import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Button,
  Text,
  Footer,
} from 'native-base';
export default class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Text>Login Form</Text>
        </Header>
        <Content>
          <Form>
            <Item>
              <Input placeholder='Username' />
            </Item>
            <Item last>
              <Input placeholder='Password' />
            </Item>
            <Button primary full>
              <Text> Primary </Text>
            </Button>
          </Form>
        </Content>
        <Footer />
      </Container>
    );
  }
}
