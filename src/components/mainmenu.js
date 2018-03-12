import React, { Component } from "react";
import { Text, TouchableHighlight, StyleSheet, View } from "react-native";
import MenuTitle from "../components/menutitle";
import MenuButton from "../components/menubutton";

export default class MainMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <MenuTitle />
        <View style={styles.buttonContainer}>
          <MenuButton text="Play" onPressed={() => this.props.navigation.navigate('Game')} />
          <MenuButton text="Quit" onPressed={() => console.log('We should quit the game')} />
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
  }
});
