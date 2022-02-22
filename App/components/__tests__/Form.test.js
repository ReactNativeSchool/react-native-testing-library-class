import React from "react";
import { render, fireEvent } from "@testing-library/react-native";

import { TextField } from "../Form";

test("renders the passed label", () => {
  const { getByText, queryByText } = render(<TextField label="Test Label" />);

  expect(getByText("Test Label")).not.toBeNull();
  expect(queryByText("ASDF")).toBeNull();
});

test("forwards remaining props to the underlying TextInput", () => {
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
      passedProp: "yes",
    })
  );

  fireEvent.changeText(getByTestId("Form.TextInput"), "testing!");
  expect(onChangeTextMock).toHaveBeenCalled();
  expect(onChangeTextMock).toHaveBeenCalledWith("testing!");
  expect(onChangeTextMock).not.toHaveBeenCalledWith("no!");
});
