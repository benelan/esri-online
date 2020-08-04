import React from 'react';
import { User } from '@speedingplanet/rest-server';

// Define UserDetailsProps to take one prop, "user" which is
// typed as a User.
interface UserDetailsProps {
  user: User;
}

// Takes a User (where is a User defined?) as a property and renders out
// relevant details (displayName, address, email, etc.)
const UserDetails = ({ user }: UserDetailsProps) => {
  return (
    <div className="card">
      <div className="card-header">{user.displayName}</div>
      <ul className="list-group">
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
