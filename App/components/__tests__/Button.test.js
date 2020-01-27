import React from "react";
import { render, fireEvent } from "react-native-testing-library";

import { Button } from "../Button";

test("can press button", () => {
  const onPress = jest.fn();
  const { getByText } = render(<Button text="Submit" onPress={onPress} />);

  fireEvent.press(getByText("Submit"));
  expect(onPress).toHaveBeenCalled();
});

// test("onPress not called when button disabled", () => {
//   const onPress = jest.fn();
//   const { getByText } = render(
//     <Button text="Submit" onPress={onPress} disabled />
//   );

//   fireEvent.press(getByText("Submit"));
//   expect(onPress).not.toHaveBeenCalled();
// });
