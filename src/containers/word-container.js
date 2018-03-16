import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Letter from "../components/letter";

export default class WordContainer extends Component {
  constructor(props) {
    super(props);
    this.wordArray = props.wordArray;
  }

  buildLetters() {
    return this.wordArray.map((prop, key) => (
      <Letter letter={prop[0]} key={key} />
    ));
  }

  render() {
    const letterArray = this.buildLetters();
    return <View style={styles.container}>{letterArray}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
      flexDirection:'row'
  }
});
