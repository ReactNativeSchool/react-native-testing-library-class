import React from "react";
import { render } from "@testing-library/react-native";

import { TextField } from "../Form";

test("renders the passed label", () => {
  const { getByText, queryByText } = render(<TextField label="Test Label" />);

  expect(getByText("Test Label")).not.toBeNull();
  expect(queryByText("ASDF")).toBeNull();
});

test("forwards remaining props to the underlying TextInput", () => {
  const { getByTestId } = render(
    <TextField label="Test Label" passedProp="yes" />
  );

  expect(getByTestId("Form.TextInput").props).toEqual(
    expect.objectContaining({
      passedProp: "yes",
    })
  );
});
