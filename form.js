import React from "react";
import Random from "/random";
import { check, fillArray } from "./util/checkExist";

export default class Form extends React.Component {
  state = {
    letter: "",
    letterFound: ""
  };

  handleChange = event => {
    const value = event.target.value;
    console.log("THIS IS THE INPUT LETTER", value);

    this.setState({ letter: value });
  };

  checkExist = () => {
    const randomWord = this.props.ranprop;
    const stateLetter = this.state.letter;

    this.setState({
      letterFound: check(randomWord, stateLetter, this.props.arrayprop)
    });
  };

  render() {
    console.log("give me the randomWord prop", this.props.ranprop);
    console.log("give me the arrayState prop", this.props.arrayprop);
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
        {this.state.letterFound}
      </div>
    );
  }
}
