import React from "react";
import Random from "./random";
import Form from "./form";
// import { accessToken } from "../../token";
import random from "random-words";

export default class App extends React.Component {
  state = {
    hello:
      "Let's get started! You can delete this state as you won't need it going forward."
  };

  render() {
    return (
      <div>
        {" "}
        {this.state.hello}
        <Random />
      </div>
    );
  }
}
