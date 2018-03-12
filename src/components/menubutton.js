import React, { Component } from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

export default class MenuButton extends Component {
    constructor(props){
        super(props);
        this.text = props.text;
        this.onPressed = props.onPressed;
    }
  render() {
    return (
      <TouchableHighlight
        onPress={this.onPressed}
        underlayColor="transparent"
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>{this.text}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: "center",
        backgroundColor: "#6b6c6d"
      },
      buttonText: {
        padding: 20,
      },
});