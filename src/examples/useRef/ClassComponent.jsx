/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.textInputRef = React.createRef();
    this.state = {
      sendSpam: false,
      name: ""
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.sendSpam !== this.state.sendSpam &&
      this.state.sendSpam === true
    ) {
      this.textInputRef.current.focus();
    }
  }

  hanldeSendSpamClick = () => {
    this.setState({ sendSpam: !this.state.sendSpam });
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  render() {
    const { sendSpam, name } = this.state;
    return (
      <div>
        <div className="form-group">
          <label htmlFor="classNameInput">Name</label>
          <input
            id="classNameInput"
            type="text"
            autoComplete="off"
            className="form-control"
            placeholder="Enter your name"
            value={name}
            onChange={this.handleNameChange}
          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="sendSpamClass"
              value={sendSpam}
              onChange={this.hanldeSendSpamClick}
            />
            <label className="custom-control-label" htmlFor="sendSpamClass">
              Do you want spam emails? 🤔
            </label>
          </div>
        </div>
        {sendSpam && (
          <>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                ref={this.textInputRef}
              />
            </div>
          </>
        )}

        <button type="button" className="btn btn-primary">
          Let me in
        </button>
      </div>
    );
  }
}
