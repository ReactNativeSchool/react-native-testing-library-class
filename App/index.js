import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import CreateAccount from "./screens/CreateAccount";
import SignIn from "./screens/SignIn";

const AppNavigator = createStackNavigator({
  CreateAccount: {
    screen: CreateAccount
  },
  SignIn: {
    screen: SignIn
  }
});

export default createAppContainer(AppNavigator);
