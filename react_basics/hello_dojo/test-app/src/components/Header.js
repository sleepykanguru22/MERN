import React, { Component } from "react";

class Header extends Component {
  render() {
    const { firstName, lastName } = this.props;
    return (
      <div>
        <p className="mt-5">
          My name is {firstName} {lastName}
        </p>
      </div>
    );
  }
}
export default Header;
