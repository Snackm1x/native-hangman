import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";

export default class Letter extends Component {
  constructor(props) {
    super(props);
    this.letter = props.letter;
  }
  render() {
    return (
        <Text style={styles.letter}>{this.letter}</Text>
    );
  }
}

const styles = StyleSheet.create({
    letter: {
        padding: 5
    }
});
