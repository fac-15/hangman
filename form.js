import React from "react";
import Random from "/random";
import random from "random-words";
import { Image } from "./image.js";
import hangmanStand from "./hangmanStand.jpg";
import hangmanHead from "./hangmanHead.jpg";
import hangmanBody from "./hangmanBody.jpg";
import hangmanFull from "./hangmanFull.jpg";
import { check, fillArray } from "./util/checkExist";

export default class Form extends React.Component {
  state = {
    randomWordGenerator: null,
    letterInput: "",
    matchFound: "",
    displayArray: [],
    lives: 3
  };

  createRandomWord = () => {
    this.setState({
      randomWordGenerator: random()
    });
  };
  creatEmtryArray = () => {
    this.setState({
      displayArray: fillArray(" _ ", this.state.randomWordGenerator.length)
    });
  };
  handleChange = event => {
    const value = event.target.value;
    console.log("THIS IS THE INPUT LETTER", value);
    console.log(this.state.randomWordGenerator);

    this.setState({ letterInput: value });
  };

  checkExist = () => {
    localStorage.setItem("previous", JSON.stringify(this.state.displayArray));

    this.setState({
      displayArray: check(
        this.state.randomWordGenerator,
        this.state.letterInput,
        this.state.displayArray
      )
    });

    let previousValue = localStorage.getItem("previous");
    previousValue = JSON.parse(previousValue);
    let currentValue = this.state.displayArray;
    if (JSON.stringify(previousValue) == JSON.stringify(currentValue)) {
      console.log("previous state: ", previousValue);
      console.log("current state: ", currentValue);
      this.setState({
        lives: this.state.lives - 1
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <h1 className="header">HANG_MAN</h1>
        <div className="main_container">
          <div className="images">
            {this.state.lives == 3 && (
              <div>
                <Image url={hangmanStand} />
                <h2>You still have {this.state.lives} lives</h2>
              </div>
            )}
            {this.state.lives == 2 && (
              <div>
                <Image url={hangmanHead} />
                <h2>You still have {this.state.lives} lives</h2>
              </div>
            )}
            {this.state.lives == 1 && (
              <div>
                <Image url={hangmanBody} />
                <h2>You still have {this.state.lives} lives</h2>
              </div>
            )}
            {this.state.lives == 0 && (
              <div>
                <Image url={hangmanFull} />
                <h2>Game Over !</h2>
              </div>
            )}
          </div>
          <div className="inputSection">
            <button onClick={this.createRandomWord}>Start !</button>
            <button onClick={this.creatEmtryArray}>See length !</button>
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
            <button onClick={this.checkExist}>Check if exist</button>
            {this.state.randomWordGenerator !== null && (
              <h3>The word is generated!</h3>
            )}
            {this.state.displayArray.map(el => (
              <span>{el}</span>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
