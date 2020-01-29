import React from "react";
import { render, fireEvent } from "react-native-testing-library";

import CreateAccount from "../CreateAccount";

beforeEach(() => {
  fetch.resetMocks();
});

test("it renders all inputs", () => {
  const { toJSON } = render(<CreateAccount />);

  expect(toJSON()).toMatchSnapshot();
});

test("displays error if all fields are not completed", () => {
  const { getByTestId } = render(<CreateAccount />);

  expect(getByTestId("error-message").props.text).toBeNull();

  fireEvent.press(getByTestId("submit-button"));

  expect(getByTestId("error-message").props.text).not.toBeNull();

  fireEvent(
    getByTestId("CreateAccount.email"),
    "onChangeText",
    "test@example.com"
  );

  expect(getByTestId("error-message").props.text).not.toBeNull();
});

test("doesn't display error message if all fields have an input", async () => {
  fetch.mockResponseOnce(JSON.stringify({}));

  const { getByTestId } = render(<CreateAccount />);

  fireEvent(
    getByTestId("CreateAccount.email"),
    "onChangeText",
    "test@example.com"
  );

  fireEvent.press(getByTestId("submit-button"));
  expect(getByTestId("error-message").props.text).not.toBeNull();

  fireEvent(getByTestId("CreateAccount.fName"), "onChangeText", "test");
  fireEvent(getByTestId("CreateAccount.lName"), "onChangeText", "test");
  fireEvent(getByTestId("CreateAccount.password"), "onChangeText", "test");
  fireEvent(getByTestId("CreateAccount.cPassword"), "onChangeText", "test");

  fireEvent.press(getByTestId("submit-button"));

  expect(getByTestId("error-message").props.text).toBeNull();
  await expect(fetch.mock.calls.length).toEqual(1);
});
