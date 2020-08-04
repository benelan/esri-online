import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import TransactionsManager from './transactions/TransactionsManager';
import UsersManager from './users/UsersManager';
import DemosManager from './demos/DemosManager';
import Home from './Home';

import './css/bootstrap.css';

function App() {
  return (
    <Router>
      <main className="container-fluid">
        <div className="row pl-1">
          <header className="col">
            <h1>ZipPay!</h1>
            <p>The new way to pay for stuff.</p>
          </header>
        </div>
        <nav className="navbar navbar-expand navbar-dark bg-dark mb-3">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  to="/"
                  className="nav-link"
                  exact
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="active"
                  to="/demos"
                  className="nav-link"
                  exact
                >
                  Demos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  to="/users"
                  className="nav-link"
                >
                  Users
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  to="/transactions"
                  className="nav-link"
                >
                  Transactions
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <div className="row pl-1">
          <div className="col">
            <Switch>
              <Route path="/users">
                <UsersManager />
              </Route>
              <Route path="/transactions">
                <TransactionsManager />
              </Route>
              <Route path="/demos">
                <DemosManager />
              </Route>
              <Route path="/" exact>
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </main>
    </Router>
  );
}

export default App;
