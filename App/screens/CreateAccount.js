import React from "react";
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

export default ({ navigation }) => (
  <ScrollView
    contentContainerStyle={{ paddingVertical: 20 }}
    style={{ backgroundColor: "#fff" }}
  >
    <TextField label="Email" placeholder="john.doe@example.com" />
    <TextField label="First Name" placeholder="John" />
    <TextField label="Last Name" placeholder="Doe" />
    <TextField label="Password" secureTextEntry />
    <TextField label="Confirm Password" secureTextEntry />
    <ErrorText text="" />
    <Button text="Submit" onPress={() => alert("todo!")} />
    <View style={styles.textBlock}>
      <Text style={styles.text}>Already have an account?</Text>
      <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
        <Text style={[styles.text, styles.link]}>Sign in.</Text>
      </TouchableOpacity>
    </View>
  </ScrollView>
);
