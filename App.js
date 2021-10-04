import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import CreateAccount from "./App/screens/CreateAccount";
import SignIn from "./App/screens/SignIn";

const AppNavigator = createStackNavigator({
  CreateAccount: {
    screen: CreateAccount,
  },
  SignIn: {
    screen: SignIn,
  },
});

export default createAppContainer(AppNavigator);
