import React, { Component } from "react";
import { View } from "react-native";

export default class GuessContainer extends Component {
  constructor(props) {
    super(props);
    this.guesses = props.guesses;
  }

  addGuess(letter) {
    this.guesses.push(letter);
  }

  render() {
    return <View />;
  }
}
