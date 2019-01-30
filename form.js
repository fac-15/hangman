import React from "react";
import Random from "/random";

export default class Form extends React.Component {
  state = {
    letter: ""
  };
  handleChange = event => {
    const value = event.target.value;
    console.log("target", value);
    // const value =
    //   target.type === "checkbox" ? target.checked : target.value;
    // console.log(target.name, value);
    this.setState({ letter: value });
  };

  checkExist = () => {
    const letterVar = this.props.ranprop;
    console.log("letterVar", letterVar);
  };

  render() {
    console.log("this is working");
    console.log("give me the prop", this.props.ranprop);
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
