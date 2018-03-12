import React from "react";
import { shallow } from "enzyme";
import MainMenu from "../../src/components/mainmenu";
import MenuTitle from "../../src/components/menutitle";
import MenuButton from "../../src/components/menubutton";

let component;

beforeEach(() => {
  component = shallow(<MainMenu />);
});

it("renders without crashing", () => {
  expect(component).not.toBeNull();
  expect(component.name()).toEqual("View");
});

it("should display title", () => {
  expect(component.find(MenuTitle)).toHaveLength(1);
});

it("should have 3 menu buttons rendered", () => {
  expect(component.find(MenuButton)).toHaveLength(3);
});
