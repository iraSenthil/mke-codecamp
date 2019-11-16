/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useRef } from "react";
import { useEffect } from "react";

export default function Hooks() {
  const [name, setName] = useState("");
  const [sendSpam, setSendSpam] = useState(false);
  const textInputRef = useRef();

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function hanldeSendSpamClick() {
    setSendSpam(!sendSpam);
  }

  useEffect(() => {
    if (sendSpam) {
      textInputRef.current.focus();
    }
  }, [sendSpam]);

  return (
    <div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Name</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          autoComplete="off"
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
        />
      </div>

      <div className="form-group">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
            value={sendSpam}
            onChange={hanldeSendSpamClick}
          />
          <label className="custom-control-label" htmlFor="customCheck1">
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
              ref={textInputRef}
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
