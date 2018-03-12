import React, { Component } from "react";
import { Text, TouchableHighlight, StyleSheet, View } from "react-native";
import MenuTitle from "../components/menutitle";
import MenuButton from "../components/menubutton";

export default class MainMenu extends Component {
  onPlayPressed() {
    console.log("We want to play hangman!");
  }

  onOptionsPressed() {
    console.log("We opened the options screen!");
  }

  onQuitPressed() {
    console.log("We quit the program!");
  }

  render() {
    return (
      <View style={styles.container}>
        <MenuTitle />
        <View style={styles.buttonContainer}>
          <MenuButton text='Play' onPressed={this.onPlayPressed} />
          <MenuButton text='Options' onPressed={this.onOptionsPressed}/>
          <MenuButton text='Quit' onPressed={this.onQuitPressed}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainer: {
    paddingTop: 60,
    alignItems: "center"
  },
});
