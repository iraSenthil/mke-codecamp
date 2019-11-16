import React from "react";
import Hooks from "./Hooks";
import ClassComponent from "./ClassComponent";
import UsePromiseHooks from "./UsePromiseHooks";

export default function UsePromiseExample() {
  return (
    <div>
      <h1>usePromise Example</h1>
      <hr />

      <h2>Using Class</h2>
      <ClassComponent />

      <hr />

      <h2>Using Hooks</h2>
      <Hooks />

      <hr />

      <h2>Using usePromise</h2>
      <UsePromiseHooks />
    </div>
  );
}
