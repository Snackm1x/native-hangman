import React from "react";
import { shallow } from "enzyme";
import InputContainer from "../../src/containers/input-container";
import Input from "../../src/components/input";

describe("input-container", () => {
  it("should contain a field for input", () => {
    const component = shallow(<InputContainer />);
    expect(component.find(Input)).toHaveLength(1);
  });
});
