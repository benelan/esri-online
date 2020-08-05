import React from 'react';
import { User } from '@speedingplanet/rest-server';
import * as lodash from 'lodash';

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

export interface ColumnConfig {
  label: string;
  field: string;
}

interface UsersGridProps {
  users: User[];
  columns: ColumnConfig[];
  selectColumn?: (field: string) => void;
}

const UsersGrid = ({ users, columns, selectColumn }: UsersGridProps) => {
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          {columns.map(({ field, label }) => (
            <th key={field} onClick={() => selectColumn && selectColumn(field)}>
            {/* <th key={field} onClick={() => selectColumn!(field)}> */}
              {label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={`${user.id}-${user.version}`}>
            {columns.map(({ field }) => (
              <td key={field}>{lodash.get(user, field)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersGrid;
