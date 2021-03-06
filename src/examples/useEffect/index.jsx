import React from "react";
import Hooks from "./Hooks";
import ClassComponent from "./ClassComponent";

export default function UseEffectExample() {
  return (
    <div>
      <h1>useEffect Example</h1>
      <hr />

      <h2>Using Hooks</h2>
      <Hooks />

      <hr />

      <h2>Using Class</h2>
      <ClassComponent />
    </div>
  );
}
