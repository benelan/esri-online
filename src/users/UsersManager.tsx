import React, { Component } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import UsersBrowser from './UsersBrowser';
import { users } from '@speedingplanet/rest-server';
import UsersGrid from './UsersGrid';

export default class UsersManager extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <h2>Users Manager</h2>
          <ul className="list-inline">
            <li className="list-inline-item">
              <Link to="/users/browse">Browse Users</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/users/list">List all users</Link>
            </li>
          </ul>
          <Switch>
            <Route path={['/users/browse', '/users']} exact>
              <UsersBrowser />
            </Route>
            <Route path="/users/list">
              <UsersGrid users={users} />
            </Route>
            <Route
              path="/users/parameter/:foo"
              render={({ match }) => {
                return <p>The parameter was {match.params.foo}</p>;
              }}
            />
            {/* Bad routes (bad urls really) */}
            <Route path="/users/*">
              <p>Bad route, man</p>
            </Route>
            {/* Default route */}
            {/*
            <Route path="/users">
              <Redirect to="/users/browse" />
            </Route>
            */}
          </Switch>
        </div>
      </div>
    );
  }
}
