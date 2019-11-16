/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.handleRedButtonClick = this.handleRedButtonClick.bind(this);
  }

  state = {
    count: 0
  };

  handleButtonClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleRedButtonClick() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <p>You clicked {count} times</p>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.handleButtonClick}
        >
          Click me
        </button>

        <button
          type="button"
          className="btn btn-danger ml-2"
          onClick={this.handleRedButtonClick}
        >
          I dare you 💣
        </button>
      </div>
    );
  }
}
