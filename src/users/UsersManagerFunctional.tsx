import React, {useState} from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import UsersBrowser from './UsersBrowser';
import { users } from '@speedingplanet/rest-server';
import UsersGrid from './UsersGrid';
import { ColumnConfig } from './UsersGrid';
import * as lodash from 'lodash';

const columns: ColumnConfig[] = [
  {
    field: 'displayName',
    label: 'Name',
  },
  {
    field: 'address.city',
    label: 'City',
  },
  {
    field: 'address.state',
    label: 'State',
  },
];

type SortDirection = 'asc' | 'desc';
interface UsersManagerState {
  sortField: string;
  sortDirection: SortDirection
}

const UsersManagerFunctional = () => {
  // single object
  const [sortConfig, setSortConfig] = useState<UsersManagerState>({ sortField: '', sortDirection: 'asc'});

  // Individual properties
  // const [sortField, setSortField] = useState('');
  // const [sortDirection, setSortDirection] = useState('asc');

  const handleSelectColumn = (field: string) => {
    let sortDirection: SortDirection = 'asc';

    if (sortConfig.sortField === field && sortConfig.sortDirection === 'asc') {
      sortDirection = 'desc'
    }

    setSortConfig({sortField: field, sortDirection});
  }

  const displayUsers = lodash.orderBy(users, sortConfig.sortField, sortConfig.sortDirection);

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
            <UsersGrid
              users={displayUsers}
              columns={columns}
              selectColumn={handleSelectColumn}
            />
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
};

export default UsersManagerFunctional;