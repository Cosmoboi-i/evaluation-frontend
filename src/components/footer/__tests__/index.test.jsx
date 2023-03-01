import React from "react";
import { render } from "@testing-library/react";
import Footer from "..";

describe("Footer", () => {
  it("should render properly", () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
