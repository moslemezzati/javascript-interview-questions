import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Hooks from "./examples/Hooks";
import ErrorBoundary from "./examples/ErrorBoundary";
import Memo from "./examples/Memo";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/hooks">Hooks</Link>
            </li>
            <li>
              <Link to="/error-boundary">ErrorBoundry</Link>
            </li>
            <li>
              <Link to="/memo">Memo</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/hooks" component={Hooks} />
          <Route path="/error-boundary" component={ErrorBoundary} />
          <Route path="/memo" component={Memo} />
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
