import React from "react";
import ReactDOM from "react-dom";
import HelloBox from "./index.js";
import { mount, shallow, render } from "enzyme";

describe("HelloBox", () => {
  it("should render correctly with no props", () => {
    const component = shallow(<HelloBox />);

    expect(component).toMatchSnapshot();
  });
});
