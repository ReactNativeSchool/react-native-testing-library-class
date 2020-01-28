import React from "react";
import { render, fireEvent } from "react-native-testing-library";

import { TextField } from "../Form";

test("renders a label", () => {
  const { queryByText, getByText } = render(<TextField label="Test Label" />);

  expect(queryByText("asdf")).toBeNull();
  expect(getByText("Test Label")).not.toBeNull();
});

test("forwards remaining props to underlying TextInput", () => {
  const onChangeTextMock = jest.fn();
  const { getByTestId } = render(
    <TextField
      label="Test Label"
      passedProp="yes"
      onChangeText={onChangeTextMock}
    />
  );

  expect(getByTestId("Form.TextInput").props).toEqual(
    expect.objectContaining({
      passedProp: "yes"
    })
  );

  fireEvent.changeText(getByTestId("Form.TextInput"), "testing!");
  expect(onChangeTextMock).toHaveBeenCalledWith("testing!");
  expect(onChangeTextMock).not.toHaveBeenCalledWith("potato");
});
