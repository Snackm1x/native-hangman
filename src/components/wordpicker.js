import wordBank from '../database/words';

class WordPicker {
    constructor(){
        this.words = wordBank;
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
const wordPicker = new WordPicker();
export default wordPicker;