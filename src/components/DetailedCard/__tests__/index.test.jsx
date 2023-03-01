import React from "react";
import { render } from "@testing-library/react";
import DetailedCard from "..";

describe("DetailedCard", () => {
  it("should render properly", () => {
    const { asFragment } = render(<DetailedCard {} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
