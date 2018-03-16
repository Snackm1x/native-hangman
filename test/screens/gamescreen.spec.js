import React from "react";
import { shallow } from "enzyme";
import GameScreen from "../../src/screens/gamescreen";
import Hangman from "../../src/components/hangman";
import InputContainer from "../../src/containers/input-container";
import WordContainer from "../../src/containers/word-container";
import GuessContainer from "../../src/containers/guess-container";

describe("gamescreen", () => {
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
    expect(component.props().word).not.toBeNull();
  });

  it("should have a container for the winning word", () => {
    expect(component.find(WordContainer)).toHaveLength(1);
  });

  it("should have an initalized container for letters that have been guessed", () => {
    const container = component.find(GuessContainer);
    expect(container).toHaveLength(1);
    expect(container.props().guesses).toEqual([]);
  });

  it("should have a container for input from user", () => {
    expect(component.find(InputContainer)).toHaveLength(1);
  });
});
