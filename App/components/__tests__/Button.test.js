import React from "react";
import { render, fireEvent } from "@testing-library/react-native";

import { Button } from "../Button";

test("can press the button", () => {
  const onPressMock = jest.fn();

  const { getByText } = render(<Button text="Testing" onPress={onPressMock} />);

  fireEvent.press(getByText("Testing"));
  expect(onPressMock).toHaveBeenCalled();
  expect(onPressMock.mock.calls.length).toBe(1);

  fireEvent.press(getByText("Testing"));
  expect(onPressMock.mock.calls.length).toBe(2);
});
