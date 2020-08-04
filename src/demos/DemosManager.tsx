import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import FirstComponent from './FirstComponent';
import { UsingCustomGreeter } from './CustomGreeter';
import EventHandling from './EventHandling';
import StateCounter from './StateCounter';

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
          <li>
            <Link to="/demos/event-handling">Event Handling</Link>
          </li>
          <li>
            <Link to="/demos/state-counter">State Counter</Link>
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
          <Route path="/demos/event-handling">
            <EventHandling />
          </Route>
          <Route path="/demos/state-counter">
            <StateCounter />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default DemosManager;
