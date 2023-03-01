import React from "react";
import { render } from "@testing-library/react";
import Filter from "..";

describe("Filter", () => {
  it("should render properly", () => {
    const { asFragment } = render(<Filter />);
    expect(asFragment()).toMatchSnapshot();
  });
});
