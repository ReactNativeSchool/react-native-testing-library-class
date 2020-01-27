import React from "react";
import { render } from "react-native-testing-library";

import { TextField } from "../Form";

test("renders a label", () => {
  const { queryByText, getByText } = render(<TextField label="Test Label" />);

  expect(queryByText("asdf")).toBeNull();
  expect(getByText("Test Label")).not.toBeNull();
});

test("forwards remaining props to underlying TextInput", () => {
  const { getByTestId } = render(
    <TextField label="Test Label" passedProp="yes" />
  );

  expect(getByTestId("Form.TextInput").props).toEqual(
    expect.objectContaining({
      passedProp: "yes"
    })
  );
});
