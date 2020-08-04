import React, { Component } from 'react';
import UsersBrowser from './UsersBrowser';

export default class UsersManager extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <h2>Users Manager</h2>
          <UsersBrowser />
        </div>
      </div>
    );
  }
}
