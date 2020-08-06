// import {createStore} from '@reduxjs/toolkit';
const { createStore } = require('@reduxjs/toolkit');

const initialState = {
  counter: 0,
};

const incrementAction = {
  type: 'increment',
};

const decrementAction = {
  type: 'decrement',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, counter: state.counter + 1 };
    case 'decrement':
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);

let lastState = {};

store.subscribe(() => {
  let nextState = store.getState();
  if (nextState !== lastState) {
    console.log('Counter is now: ', store.getState());
  }

  lastState = nextState;
});

store.dispatch(incrementAction);
store.dispatch(incrementAction);
store.dispatch({ type: 'foo' });
store.dispatch(incrementAction);
store.dispatch(incrementAction);
