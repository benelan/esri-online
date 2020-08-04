import React, { Component } from 'react';
import UserDetails from './UserDetails';
import { users } from '@speedingplanet/rest-server';

export default class UsersManager extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <h2>Users Manager</h2>
          {/* Pass one user to display into UserDetails */}
          <UserDetails user={users[0]} />
        </div>
      </div>
    );
  }
}
