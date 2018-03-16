import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Letter from "../components/letter";

export default class GuessContainer extends Component {
  constructor(props) {
    super(props);
    this.guesses = props.guesses;
  }

  buildGuesses() {
    return this.guesses.map((prop, key) => (
      <Letter letter={prop[0]} key={key} />
    ));
  }

  addGuess(letter) {
    this.guesses.push(letter);
  }

  render() {
    return <View style={styles.guessContainer}>{this.buildGuesses}</View>;
  }
}

const styles = StyleSheet.create({
  guessContainer: {
    flexDirection: "column"
  }
});
