import React from "react";
import { render } from "@testing-library/react";
import Card from "..";

export const mockCard = {
  id: 1,
  name: "abc",
  description: "abc",
  venue: "abc",
  datetime: "abc",
  timezone: "abc",
  areSeatsAvailable: false,
  isRegistered: false,
  isBookmarked: false,
  imgUrl: "ad",
  updateEvent: jest.fn(),
};

describe("Card", () => {
  it("should render properly", () => {
    const { asFragment } = render(<Card {...mockCard} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
