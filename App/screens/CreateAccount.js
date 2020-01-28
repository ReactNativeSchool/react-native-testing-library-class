import React, { isValidElement } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  View
} from "react-native";

import { TextField, ErrorText } from "../components/Form";
import { Button } from "../components/Button";

const styles = StyleSheet.create({
  textBlock: {
    marginTop: 20
  },
  text: {
    fontSize: 18,
    color: "#969696",
    textAlign: "center",
    marginBottom: 2
  },
  link: {
    textDecorationLine: "underline"
  }
});

const isValidInputs = state => {
  const fields = ["email", "fName", "lName", "password", "cPassword"];
  const validArray = fields.map(field => {
    if (!state[field] || state[field].length === 0) {
      return false;
    }
    return true;
  });

  const validFields = validArray.filter(valid => valid);
  return validFields.length === fields.length;
};

export default class CreateAccount extends React.Component {
  state = { errorMessage: null };

  onSubmit = () => {
    if (!isValidInputs(this.state)) {
      this.setState({ errorMessage: "An error occured." });
    } else {
      this.setState({ errorMessage: null });
    }
  };

  render() {
    const { navigation } = this.props;

    return (
      <ScrollView
        contentContainerStyle={{ paddingVertical: 20 }}
        style={{ backgroundColor: "#fff" }}
      >
        <TextField
          testID="CreateAccount.email"
          label="Email"
          placeholder="john.doe@example.com"
          onChangeText={email => this.setState({ email })}
        />
        <TextField
          testID="CreateAccount.fName"
          label="First Name"
          placeholder="John"
          onChangeText={fName => this.setState({ fName })}
        />
        <TextField
          testID="CreateAccount.lName"
          label="Last Name"
          placeholder="Doe"
          onChangeText={lName => this.setState({ lName })}
        />
        <TextField
          testID="CreateAccount.password"
          label="Password"
          secureTextEntry
          onChangeText={password => this.setState({ password })}
        />
        <TextField
          testID="CreateAccount.cPassword"
          label="Confirm Password"
          secureTextEntry
          onChangeText={cPassword => this.setState({ cPassword })}
        />
        <ErrorText testID="error-message" text={this.state.errorMessage} />
        <Button testID="submit-button" text="Submit" onPress={this.onSubmit} />
        <View style={styles.textBlock}>
          <Text style={styles.text}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
            <Text style={[styles.text, styles.link]}>Sign in.</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
