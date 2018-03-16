import React from 'react';
import { shallow } from 'enzyme';
import WordContainer from '../../src/containers/word-container';
import Letter from '../../src/components/letter';

describe("word-container", () => {
    let component;
    beforeEach(() => {
        component = shallow(<WordContainer wordArray={['a','b','c']}/>)
    });
    it("should contain a letter component for each letter of the word", () => {
        let winningWord = component.instance().props.wordArray;
        expect(component.find(Letter)).toHaveLength(winningWord.length);
    });
});