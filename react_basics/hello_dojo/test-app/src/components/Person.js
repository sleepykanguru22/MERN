import React, { Component } from "react";

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.age
    };
  }
  handleCountClick = () => {
    // DON'T MUTATE STATE DIRECTLY, make a copy and edit the copy.
    const newState = { ...this.state };
    const incrementAmount = this.props.amount || 1;
    newState.count += incrementAmount;

    // setState WILL NOT RERENDER unless given a NEW object.
    this.setState(newState);
  };
  render() {
    const { firstName, lastName, age, hairColor } = this.props;

    return (
      <div>
        <h1 className="mt-5">
          {lastName}, {firstName}
        </h1>
        <p>
          New Age:
          {this.state.count}
        </p>
        <p>Hair Color: {hairColor}</p>
        <button onClick={this.handleCountClick}>birthday</button>
      </div>
    );
  }
}
export default Person;
