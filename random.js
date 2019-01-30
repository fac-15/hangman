import React from "react";
import Form from "./form";
import random from "random-words";

export default class Random extends React.Component {
  state = {
    randomWord: ""
  };
  createRandomWord = () => {
    this.setState({ randomWord: random() });
  };

  render() {
    console.log(random());
    return (
      <div>
        <button onClick={this.createRandomWord}>Click Me!</button>
        <h3>{this.state.randomWord} </h3>
        <Form ranprop={this.state.randomWord} />
      </div>
    );
  }
}
