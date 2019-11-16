import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UseStateExample from "./examples/useState/index";
import UseEffectExample from "./examples/useEffect";
import UseRefExample from "./examples/useRef/index";
import UsePromiseExample from "./examples/usePromise/index";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 sidebar text-white bg-dark">
            <h2>Examples</h2>
            <nav>
              <ul>
                <li>
                  <Link to="/useState" className="text-white">
                    useState
                  </Link>
                </li>
                <li>
                  <Link to="/useEffect" className="text-white">
                    useEffect
                  </Link>
                </li>
                <li>
                  <Link to="/useRef" className="text-white">
                    useRef
                  </Link>
                </li>

                <li>
                  <Link to="/usePromise" className="text-white">
                    usePromise
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col content">
            <Switch>
              <Route path="/useState">
                <UseStateExample />
              </Route>

              <Route path="/useEffect">
                <UseEffectExample />
              </Route>

              <Route path="/useRef">
                <UseRefExample />
              </Route>

              <Route path="/usePromise">
                <UsePromiseExample />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
