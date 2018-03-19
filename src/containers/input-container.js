import React, { Component } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default class InputContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''}
  }

  submitGuess(){
  }

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <Button title="Guess" onPress={this.submitGuess} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row"
  }
});
