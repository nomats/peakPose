import React from "react";
import ReactDOM from "react-dom";
import PoseSelector from "./index.js";
import { mount, shallow, render } from "enzyme";

describe("PoseSelector", () => {
  it("should render correctly with no props", () => {
    const component = shallow(<PoseSelector />);

    expect(component).toMatchSnapshot();
  });
});
