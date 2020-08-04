import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import FirstComponent from './FirstComponent';
import { UsingCustomGreeter } from './CustomGreeter';

function DemosManager() {
  return (
    <div className="row">
      <div className="col-2">
        <ul className="list-unstyled">
          <li>
            <Link to="/demos/first-component">First Component</Link>
          </li>

          <li>
            <Link to="/demos/component-props">Component with props</Link>
          </li>
        </ul>
      </div>
      <div className="col">
        <Switch>
          <Route path="/demos/first-component">
            <FirstComponent />
          </Route>
          <Route path="/demos/component-props">
            <UsingCustomGreeter />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default DemosManager;
