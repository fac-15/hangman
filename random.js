import React from "react";
import Form from "./form";
import random from "random-words";
import { fillArray } from "./util/checkExist";

export default class Random extends React.Component {
  state = {};
  // createRandomWord = () => {
  //   this.setState({
  //     randomWord: random()
  //   });
  // };

  render() {
    console.log(random());
    return <div />;
  }
}
