import React from "react";
import { shallow } from "enzyme";
import GuessContainer from "../../src/containers/guess-container";

describe("guess-container", () => {
  let component;
  beforeEach(() => {
    component = shallow(<GuessContainer guesses={[]} />);
  });
  it("should contain a list of incorrect guesses", () => {
    component.instance().addGuess("a");
    component.instance().addGuess("b");
    expect(component.instance().props.guesses).toHaveLength(2);
  });
});
