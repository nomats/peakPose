import React from "react";
import ReactDOM from "react-dom";
import Checklist from "./index.js";
import { mount, shallow, render } from "enzyme";

describe("Checklist", () => {
  it("should render correctly with no props", () => {
    const component = shallow(<Checklist />);
    expect(component).toMatchSnapshot();
  });
});
