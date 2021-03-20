import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Hooks from "./examples/Hooks";
import ErrorBoundary from "./examples/ErrorBoundary";
import Memo from "./examples/Memo";
import UseCallbackComponent from "./examples/useCallback";
import UseMemoComponent from "./examples/useMemo";
import PointerEventsComponent from "./examples/PointerEvents";
import ForceUpdateComponent from "./examples/ForceUpdate";
import BrowserResizeComponent from "./examples/BrowserResize";

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
            <li>
              <Link to="/useCallback">useCallback</Link>
            </li>
            <li>
              <Link to="/useMemo">useMemo</Link>
            </li>
            <li>
              <Link to="/pointer-events">Pointer Events</Link>
            </li>
            <li>
              <Link to="/force-update">ForceUpdate</Link>
            </li>
            <li>
              <Link to="/browser-resize">Browser Resize</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/hooks" component={Hooks} />
          <Route path="/error-boundary" component={ErrorBoundary} />
          <Route path="/memo" component={Memo} />
          <Route path="/useCallback" component={UseCallbackComponent} />
          <Route path="/useMemo" component={UseMemoComponent} />
          <Route path="/pointer-events" component={PointerEventsComponent} />
          <Route path="/force-update" component={ForceUpdateComponent} />
          <Route path="/browser-resize" component={BrowserResizeComponent} />
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
