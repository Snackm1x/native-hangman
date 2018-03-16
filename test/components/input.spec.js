import React from "react";
import { TextInput } from "react-native";
import { shallow } from "enzyme";
import Input from "../../src/components/input";

describe("input", () => {
  it("it should contain a textInput", () => {
    const component = shallow(<Input />);
    expect(component.find(TextInput)).toHaveLength(1);
  });
});
