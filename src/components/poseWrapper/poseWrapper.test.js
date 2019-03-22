import React from "react";
import ReactDOM from "react-dom";
import PoseWrapper from "./index.js";
import { mount, shallow, render } from "enzyme";

describe("PoseWrapper", () => {
  it("should render correctly with no props", () => {
    const component = shallow(<PoseWrapper />);

    expect(component).toMatchSnapshot();
  });
});
