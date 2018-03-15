import React from "react";
import { shallow } from "enzyme";
import Letter from '../../src/components/letter';

describe("letter", () =>{
    let component;
    beforeEach(() =>{
        component = shallow(<Letter letter='A'/>);
    });
    it("should contain a single letter", () =>{
        expect(component.instance().props.letter).not.toEqual(undefined);
        expect(component.instance().props.letter).toHaveLength(1);
    });
})