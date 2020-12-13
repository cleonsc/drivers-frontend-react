import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import AddDriver from './components/AddDriver.js';
import Driver from './components/Driver.js';
import DriverList from './components/DriversList.js';

function App() {
  return (
    // <Router>
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/drivers" className="navbar-brand">
          Viapool
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/drivers"} className="nav-link">
              Drivers
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>
      
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/drivers"]} component={DriverList} />
            <Route exact path="/add" component={AddDriver} />
            <Route path="/drivers/:id" component={Driver} />
          </Switch>
        </div>
    </div>
    // </Router>
  );
}

export default App;
