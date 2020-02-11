import React from "react";
import { render, fireEvent } from "react-native-testing-library";

import CreateAccount from "../CreateAccount";

test("it renders all inputs as expected", () => {
  const { toJSON } = render(<CreateAccount />);

  expect(toJSON()).toMatchSnapshot();
});

test("displays error message if all fields are not completed", () => {
  const { getByTestId, getByText } = render(<CreateAccount />);

  expect(getByTestId("CreateAccount.errorMessage").props.text).toBeNull();

  fireEvent.press(getByText("Submit"));
  expect(getByTestId("CreateAccount.errorMessage").props.text).not.toBeNull();

  fireEvent.changeText(getByTestId("CreateAccount.email"), "test@example.com");
  expect(getByTestId("CreateAccount.errorMessage").props.text).not.toBeNull();
});
