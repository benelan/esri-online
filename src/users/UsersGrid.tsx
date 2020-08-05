import React from 'react';
import { User } from '@speedingplanet/rest-server';

// Passed an array of User[]
// (the type is available from @speedingplanet/rest-server)
// Render a table
// Bootstrap has a set of nice table classes
// Columns are displayName, city, state
// One row for each user
// What should the key be? (there's an id, lastUpdated, version, payeeId....)

/*
<table>
<thead>
<tr>
<th>...</th>
</tr>
</thead>
<tbody>
  <tr>
    <td>....</td>
  </tr>
</tbody>
</table>

*/

interface UsersGridProps {
  users: User[];
}

const UsersGrid = ({ users }: UsersGridProps) => {
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>City</th>
          <th>State</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={`${user.id}-${user.version}`}>
            <td>{user.displayName}</td>
            <td>{user.address.city}</td>
            <td>{user.address.state}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersGrid;
