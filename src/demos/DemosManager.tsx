import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import FirstComponent from './FirstComponent';

function DemosManager() {
  return (
    <div className="row">
      <div className="col-2">
        <ul className="list-unstyled">
          <li>
            <Link to="/demos/first-component">First Component</Link>
          </li>
        </ul>
      </div>
      <div className="col">
        <Switch>
          <Route path="/demos/first-component">
            <FirstComponent />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default DemosManager;
