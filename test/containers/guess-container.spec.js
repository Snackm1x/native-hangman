import React from "react";
import { shallow } from "enzyme";
import GuessContainer from "../../src/containers/guess-container";
import Letter from "../../src/components/letter";

describe("guess-container", () => {
  let component;
  beforeEach(() => {
    component = shallow(<GuessContainer guesses={[]} />);
    component.instance().addGuess("a");
    component.instance().addGuess("b");
  });
  it("should contain a list of incorrect guesses", () => {
    expect(component.instance().props.guesses).toHaveLength(2);
  });

  it("should display the list of incorrect guesses with letter components", () => {
    expect(component.props().children).toHaveLength(2);
  });
});
