import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';

export default class Hangman extends Component {
    constructor(props){
        super(props);
        this.stage = 0;
    }

    determinePicture(){
        switch(this.stage){
            case 0:
            return require('../../images/stage0.png');
            case 1:
            return require('../../images/stage1.png');
            case 2:
            return require('../../images/stage2.png');
            case 3:
            return require('../../images/stage3.png');
            case 4:
            return require('../../images/stage4.png');
        }
    }

    render(){
        return(
            <Image style={styles.hangman} source={this.determinePicture()}/>
        );
    }
}

const styles = StyleSheet.create({
    hangman:{
        width: 100,
        height: 150
    }
});