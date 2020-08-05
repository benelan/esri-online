import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import FirstComponent from './FirstComponent';
import { UsingCustomGreeter } from './CustomGreeter';
import EventHandling from './EventHandling';
import StateCounter from './StateCounter';
import ChildToParent from './ChildToParent';
import UseReducerManager from './use-reducer/UseReducerManager';
import GridExample from './GridExample';
import UserRenderer from './UserRenderer';

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
          <li>
            <Link to="/demos/child-to-parent">Child to Parent communication</Link>
          </li>
          <li>
            <Link to="/demos/list-rendering">Rendering a list</Link>
          </li>
          <li>
            <Link to="/demos/user-renderer">User Renderer</Link>
          </li>
          <li>
            <Link to="/demos/use-reducer">Use Reducer</Link>
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
          <Route path="/demos/child-to-parent">
            <ChildToParent />
          </Route>
          <Route path="/demos/list-rendering">
            <GridExample />
          </Route>
          <Route path="/demos/user-renderer">
            <UserRenderer/>
          </Route>
          <Route path="/demos/use-reducer">
            <UseReducerManager />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default DemosManager;
