import React from 'react';
import { shallow } from "enzyme";
import MenuButton from '../../src/components/menubutton';

let component;
let buttonFn;

beforeEach(() => {
    buttonFn = jest.fn();
    component = shallow(<MenuButton text="test" onPressed={buttonFn}/>);
  });

it("renders without crashing", () => {
    expect(component).not.toBeNull();
    expect(component.name()).toEqual("TouchableHighlight");
});

it("sets the button text passed to it", () => {
    expect(component.instance().props.text).toEqual('test');
});

it("sets the onPressed function passed to it", () => {
    expect(component.instance().props.onPressed).toEqual(buttonFn);
});