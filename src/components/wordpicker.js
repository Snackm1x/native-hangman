const path = require('path');
var fs = require('fs');

export default class WordPicker {
    constructor(){
        this.words = [];
    }

    loadWords(){
        var file = fs.readFileSync(path.resolve('./src/database', 'words.txt'), 'utf8');
        var split = file.split(',');
        split.forEach(function(word){
            this.words.push(word)
        }, this);
    }

    getRandomWord(){
        let index = this.getRandomInt(0, this.words.length - 1);
        if(index > this.words.length - 1 || index === undefined){
            console.log('Index out of range for words array! Index: ' + index);
            return undefined;
        }
        return this.words[index];
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}