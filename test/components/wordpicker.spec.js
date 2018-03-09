import React from "react";
import WordPicker from "../../src/components/wordpicker";

let wordPicker;

beforeEach(() => {
  wordPicker = new WordPicker();
  wordPicker.loadWords();
});

it("should create a new WordPicker object", () => {
  expect(wordPicker).not.toBeNull();
});

it("should load the text file into an array of words", () => {
  expect(wordPicker.words.length).toBeGreaterThan(0);
});

it("should return a string given an index", () => {
  var testWord = wordPicker.getRandomWord();
  expect(typeof testWord).toEqual(typeof "");
});

it("should return a different number each time", () => {
  var integer1 = wordPicker.getRandomInt(0, wordPicker.words.length);
  var integer2 = wordPicker.getRandomInt(0, wordPicker.words.length);
  expect(integer1).not.toEqual(integer2);
});

it("should return an integer", () => {
  var integer = wordPicker.getRandomInt(0, wordPicker.words.length);
  expect(typeof integer).toEqual(typeof 1);
});
