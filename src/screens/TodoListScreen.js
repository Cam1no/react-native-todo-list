import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Container,
  Content,
  Text,
  Footer,
} from 'native-base';

class TodoListScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Text>
            Hello
          </Text>
          <Footer>
            <Text>
              Login済み
            </Text>
          </Footer>
        </Content>
      </Container>
    );
  }
}

TodoListScreen.propTypes = { currentUser: PropTypes.object };

const mapStateToProps = state => ({ currentUser: state.currentUser });

export default connect(mapStateToProps)(TodoListScreen);
