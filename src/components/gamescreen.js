import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import Hangman from "./hangman";
import WordPicker from "./wordpicker";

export default class GameScreen extends Component {
  constructor(props){
    super(props);
    this.word = WordPicker.getRandomWord();
    this.wordArray = this.splitWord(this.word);
  }

  splitWord(word){
    let temp = [];
    for(var i = 0; i < word.length; i++){
      temp.push(word[i]);
    }
    return temp;
  }

  static navigationOptions = {
    title: "Native Hangman"
  };

  render() {
    return (
      <View style={styles.gameContainer}>
        <Hangman />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    gameContainer:{
      flex: 1,
      flexDirection: "column",
      alignItems: "center"
    }
});
