import React from "react";
import Form from "./form";
import random from "random-words";
import { fillArray } from "./util/checkExist";

export default class Random extends React.Component {
  state = {
    randomWord: "",
    makeArrayState: []
  };
  createRandomWord = () => {
    this.setState({
      randomWord: random(),
      makeArrayState: fillArray("_", this.state.randomWord.length)
    });
  };

  render() {
    console.log(random());
    return (
      <div>
        <button onClick={this.createRandomWord}>Click Me!</button>
        <h3>{this.state.randomWord} </h3>

        <Form
          ranprop={this.state.randomWord}
          arrayprop={this.state.makeArrayState}
        />
      </div>
    );
  }
}
