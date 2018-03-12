import React from 'react';
import { shallow } from "enzyme";
import GameScreen from '../../src/components/gamescreen';
import Hangman from '../../src/components/hangman';

let component;

beforeEach(() => {
  component = shallow(<GameScreen />);
});

it("renders without crashing", () => {
    expect(component).not.toBeNull();
    expect(component.name()).toEqual("View");
});

it("should contain the hangman image", () => {
    expect(component.find(Hangman)).toHaveLength(1);
});

it("should load a random word when the game begins", () => {

});