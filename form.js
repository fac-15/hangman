import React from "react";
import Random from "/random";
import random from "random-words";
import { check, fillArray } from "./util/checkExist";

export default class Form extends React.Component {
  state = {
    randomWordGenerator: "",
    letterInput: "",
    matchFound: "",
    displayArray: []
  };

  createRandomWord = () => {
    this.setState({
      randomWordGenerator: random()
    });
  };
  creatEmtryArray = () => {
    this.setState({
      displayArray: fillArray("|_|", this.state.randomWordGenerator.length)
    });
  };
  handleChange = event => {
    const value = event.target.value;
    console.log("THIS IS THE INPUT LETTER", value);

    this.setState({ letterInput: value });
  };

  checkExist = () => {
    this.setState({
      displayArray: check(
        this.state.randomWordGenerator,
        this.state.letterInput,
        this.state.displayArray
      )
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.createRandomWord}>Click Me!</button>
        <h3>{this.state.randomWordGenerator} </h3>
        <button onClick={this.creatEmtryArray}>Emtry array!</button>
        {this.state.displayArray}
        <form>
          <label htmlFor="letter">Enter Letter:</label>
          <input
            type="text"
            id="letter"
            name="letter"
            pattern="[A-Za-z]"
            maxLength="1"
            title="Enter only letters"
            value={this.state.letterInput}
            onChange={this.handleChange}
          />
        </form>

        <button onClick={this.checkExist}>Check is exist</button>
        {this.state.displayArray.map(el => (
          <span>{el}</span>
        ))}
      </div>
    );
  }
}
