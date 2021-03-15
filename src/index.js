import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Hooks from './examples/Hooks';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
      <nav>
          <ul>
            <li>
              <Link to="/hooks">Hooks</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/hooks' component={Hooks} />
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
