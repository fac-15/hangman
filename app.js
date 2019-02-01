import React from "react";
import Random from "./random";
import Form from "./form";
// import { accessToken } from "../../token";
import random from "random-words";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Form />
      </div>
    );
  }
}
