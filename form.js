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
    displayArray: []
  };

  createRandomWord = () => {
    const randomWord = random();
    this.setState({
      randomWordGenerator: randomWord,
      displayArray: fillArray(" _ ", randomWord.length),
      lives: 3
    });
  };

  handleChange = event => {
    event.preventDefault();
    const value = event.target.value;
    console.log(this.state.randomWordGenerator);
    this.setState({ letterInput: value });
  };

  checkExist = () => {

    localStorage.setItem("previous", JSON.stringify(this.state.displayArray));

    var s = this.state.letterInput;
    this.setState({
      displayArray: check(
        this.state.randomWordGenerator,
        this.state.letterInput,
        this.state.displayArray
      ),

      letterInput: ""
    });

  
      var idx = this.state.randomWordGenerator.indexOf(s)
      if(idx == -1){
        console.log("correct");
        this.setState({ lives: this.state.lives - 1 });
      }
      else{
        this.setState({ answer: this.state.displayArray.join("").toString() });
        console.log(this.state.answer);
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
                <h2>You still have {this.state.lives} lives </h2>
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
            { this.setState.randomWord!=null&&this.state.answer == this.state.randomWordGenerator &&(
             <div>
              <h2>Congratulations !! You win</h2>
            </div>
            )}
          </div>
          <div className="inputSection">
            <button onClick={this.createRandomWord}>Start !</button>
            <br />
            {this.state.randomWordGenerator !== null && (
              <h3>Start guessing!</h3>
            )}
              <span>{this.state.displayArray}</span>
            <br />
            <br />
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
            <button onClick={this.checkExist}>Check the letter</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
