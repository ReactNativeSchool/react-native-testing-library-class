import "react-native-gesture-handler";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import CreateAccount from "./App/screens/CreateAccount";
import SignIn from "./App/screens/SignIn";

const AppNavigator = createStackNavigator();

export default () => (
  <NavigationContainer>
    <AppNavigator.Navigator>
      <AppNavigator.Screen name="CreateAccount" component={CreateAccount} />
      <AppNavigator.Screen name="SignIn" component={SignIn} />
    </AppNavigator.Navigator>
  </NavigationContainer>
);
