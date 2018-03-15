import React from "react";
import { shallow } from "enzyme";
import MenuTitle from "../../src/components/menutitle";

describe("menutitle", () => {
  it("renders without crashing", () => {
    const component = shallow(<MenuTitle />);
    expect(component).not.toBeNull();
    expect(component.name()).toEqual("Text");
  });
});
