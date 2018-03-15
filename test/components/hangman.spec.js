import React from "react";
import { shallow } from "enzyme";
import Hangman from "../../src/components/hangman";

describe("hangman", () => {
  let component;
  beforeEach(() => {
    component = shallow(<Hangman />);
  });

  it("renders without crashing", () => {
    expect(component).not.toBeNull();
    expect(component.name()).toEqual("Image");
  });

  it("should display the default stage 0 image upon starting a new game", () => {
    expect(component.instance().determinePicture()).toEqual({
      testUri: "../../../images/stage0.png"
    });
  });
});
