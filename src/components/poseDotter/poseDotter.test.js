import React from "react";
import ReactDOM from "react-dom";
import PoseDotter from "./index.js";
import { mount, shallow, render } from "enzyme";

describe("PoseDotter", () => {
  it("should render correctly with no props", () => {
    const component = shallow(<PoseDotter />);

    expect(component).toMatchSnapshot();
  });
});
