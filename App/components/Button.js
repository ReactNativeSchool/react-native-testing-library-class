import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#D22322",
    paddingVertical: 10,
    paddingHorizontal: 45,
    alignItems: "center",
    marginHorizontal: 20
  },
  buttonLoading: {
    backgroundColor: "#E58E8D"
  },
  text: {
    fontWeight: "500",
    fontSize: 18,
    color: "#fff"
  }
});

export const Button = ({ text, onPress, loading = false, style = {} }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.button, loading && styles.buttonLoading, style]}
    disabled={loading}
  >
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);
