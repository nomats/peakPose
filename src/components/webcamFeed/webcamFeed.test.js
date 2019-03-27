import React from "react";
import WebcamFeed from "./index.js";
import { shallow } from "enzyme";

describe("WebcamFeed", () => {
  it("should render correctly with no props", () => {
    const component = shallow(<WebcamFeed />);

    expect(component).toMatchSnapshot();
  });
});
