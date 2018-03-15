import React, { Component } from 'react';
import { Text } from 'react-native';

export default class Letter extends Component {
    constructor(props){
        super(props);
        this.letter = props.letter;
    }
    render(){
        return(
            <Text text={this.letter}></Text>
        );
    }
};