import React from 'react';
import { User } from '@speedingplanet/rest-server';

interface UserDetailsProps {
  user: User;
}

const UserDetails = ({ user }: UserDetailsProps) => {
  return (
    <div className="card">
      <div className="card-header">{user.displayName}</div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{user.address.street}</li>
        <li className="list-group-item">
          {user.address.city}, {user.address.state}&nbsp;
          {user.address.postalCode}
        </li>
        <li className="list-group-item">{user.email}</li>
      </ul>
    </div>
  );
};

export default UserDetails;
