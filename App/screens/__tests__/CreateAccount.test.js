import React from "react";
import { render } from "@testing-library/react-native";

import CreateAccount from "../CreateAccount";

test("it renders all inputs as expected", () => {
  const { toJSON } = render(<CreateAccount />);

  expect(toJSON()).toMatchSnapshot();
});
