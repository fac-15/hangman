import React from 'react';
import Random from '/random';

export default class Form extends React.Component {
    state = {
        letter: ''
    };
    handleChange = event => {
        const value = event.target.value;
        console.log('target', value);
        // const value =
        //   target.type === "checkbox" ? target.checked : target.value;
        // console.log(target.name, value);
        this.setState({ letter: value });
    };

    checkExist = () => {
        const letterVar = this.props.ranprop;
        console.log('letterVar', letterVar);

        //**************functions to find letters in a random word

        const check = (word, letter) => {
            //array of letters
            const array = word.split('');
            // console.log(array);
            //array of idexes
            const indexes = [];
            //array of underscores
            let display = fillArray('_', array.length);

            for (var i = 0; i < array.length; i++) {
                // console.log(array[i]);
                if (array[i] == letter) {
                    indexes.push([i]);
                }
            }
            // console.log(indexes);
            // console.log(display);
            for (var j = 0; j < indexes.length; j++) {
                display[indexes[j]] = letter;
            }
            return display.join(' ');
        };

        const fillArray = (value, len) => {
            var arr = [];
            for (var i = 0; i < len; i++) {
                arr.push(value);
            }
            return arr;
        };

        console.log(check('england', 'a'));

        //*********************** End of functions
    };

    render() {
        console.log('this is working');
        console.log('give me the prop', this.props.ranprop);
        return (
            <div>
                <form>
                    <label htmlFor="letter">Enter Letter:</label>
                    <input
                        type="text"
                        id="letter"
                        name="letter"
                        pattern="[A-Za-z]"
                        maxLength="1"
                        title="Enter only letters"
                        value={this.state.letter}
                        onChange={this.handleChange}
                    />
                </form>
                <button onClick={this.checkExist}>Check is exist</button>
            </div>
        );
    }
}
