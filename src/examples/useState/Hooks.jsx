import React, { useState } from "react";

export default function Hooks() {
  const [count, setCount] = useState(0);

  function handleButtonClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button className="btn btn-primary" onClick={handleButtonClick}>
        Click me
      </button>
    </div>
  );
}
