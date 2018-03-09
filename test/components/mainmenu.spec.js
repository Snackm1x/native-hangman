import React from "react";
import { Button } from "react-native";
import { shallow } from "enzyme";
import MainMenu from "../../src/components/mainmenu";

let component;

beforeEach(() => {
  component = shallow(<MainMenu />);
});

it("renders without crashing", () => {
  expect(component).not.toBeNull();
  expect(component.name()).toEqual("View");
});

it("should have 3 buttons rendered", () => {
  expect(component.find(Button)).toHaveLength(3);
});
