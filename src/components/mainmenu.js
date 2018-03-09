import React, { Component } from 'react';
import { View, Button } from 'react-native';

export default class MainMenu extends Component {
    onPlayPressed(){

    }

    onOptionsPressed(){

    }

    onQuitPressed(){

    }

    render() {
        return(
            <View>
                <Button 
                    title="Play"
                    onPress={this.onPlayPressed}
                />
                <Button 
                    title="Options"
                    onPress={this.onOptionsPressed}
                />
                <Button 
                    title="Quit"
                    onPress={this.onQuitPressed}
                />
            </View>
        );
    }
}