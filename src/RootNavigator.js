import { createStackNavigator } from 'react-navigation';
import SignUpScreen from './screens/SignUpScreen';
import TodoListScreen from './screens/TodoListScreen';

const RootNavigator = createStackNavigator({
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: {
      headerTitle: 'Register',
    },
  },
  TodoList: {
    screen: TodoListScreen,
    navigationOptions: {
      headerTitle: 'TODO一覧',
    },
  },
});


export default RootNavigator;
