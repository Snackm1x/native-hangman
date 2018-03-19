import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import GuessContainer from "../containers/guess-container";
import Hangman from "../components/hangman";
import InputContainer from "../containers/input-container";
import WordPicker from "../components/wordpicker";
import WordContainer from "../containers/word-container";

export default class GameScreen extends Component {
  constructor(props) {
    super(props);
    this.word = WordPicker.getRandomWord();
    this.wordArray = splitWord(this.word);
  }

  static navigationOptions = {
    title: "Native Hangman"
  };

  handleGuess(guess){

  }

  render() {
    return (
      <View style={styles.gameContainer}>
        <Hangman />
        <GuessContainer guesses={[]} />
        <WordContainer wordArray={this.wordArray} />
        <InputContainer />
      </View>
    );
  }
}

function splitWord(word) {
  let temp = [];
  for (var i = 0; i < word.length; i++) {
    temp.push(word[i]);
  }
  return temp;
}

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  }
});
