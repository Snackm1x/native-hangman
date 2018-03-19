import React from "react";
import { Button, TextInput } from "react-native";
import { shallow } from "enzyme";
import InputContainer from "../../src/containers/input-container";

describe("input-container", () => {
  let component;
  beforeEach(() => {
    component = shallow(<InputContainer submitInput={() => {}}/>);
  });

  it("should contain a field for input", () => {
    expect(component.find(TextInput)).toHaveLength(1);
  });

  it("should contain a button to submit input", () => {
    expect(component.find(Button)).toHaveLength(1);
  });
});
