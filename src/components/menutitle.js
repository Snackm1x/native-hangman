import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

export default class MenuTitle extends Component {
    render() {
        return(
            <Text style={styles.title}>Native Hangman</Text>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: "bold",
        alignItems: "center"
    }
})