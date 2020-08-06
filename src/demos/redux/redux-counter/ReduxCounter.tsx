import React from 'react';
import { connect, Provider } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';
import reducer, { increment, decrement } from './redux-counter-slice';
import store from './create-store';

interface CounterProps {
  counter: number; // Input
  clickIncrement: () => void; // Output
  clickDecrement: () => void; // Output
}

const Counter = ({ counter, clickIncrement, clickDecrement }: CounterProps) => {
  console.log('counter: ', counter);
  return (
    <div>
      <p>Value: {counter}</p>
      <div>
        <button className="btn btn-primary" onClick={clickDecrement}>
          Decrement
        </button>{' '}
        &nbsp; | &nbsp;{' '}
        <button className="btn btn-secondary" onClick={clickIncrement}>
          Increment
        </button>
      </div>
    </div>
  );
};

/*
  The component needs a counter value, and handlers for incrementing and decrementing

  The store has a counter value (the store state)
  There are increment and decrement actions for the store to dispatch
*/

// Store state to component props
const mapStateToProps = (state: ReturnType<typeof reducer>) => {
  return {
    counter: state,
  };
};

// Actions to dispatch to the store mapped to component event handlers (also props)
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    clickIncrement: () => dispatch(increment()),
    clickDecrement: () => dispatch(decrement()),
  };
};

const ReduxCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

const ReduxContainer = () => (
  <Provider store={store}>
    <ReduxCounter />
  </Provider>
);

export default ReduxContainer;
