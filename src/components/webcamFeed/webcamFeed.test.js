import React from "react";
import ReactDOM from "react-dom";
import WebcamFeed from "./index.js";
import { mount, shallow, render } from "enzyme";

describe("WebcamFeed", () => {
  it("should render correctly with no props", () => {
    const component = shallow(<WebcamFeed />);

    expect(component).toMatchSnapshot();
  });
});
