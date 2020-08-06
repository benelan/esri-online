import { createStore } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
};

const incrementAction = {
  type: 'increment',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, counter: state.counter + 1 };
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);

store.subscribe(() => {
  console.log('Counter is now: ', store.getState());
});

store.dispatch(incrementAction);
store.dispatch(incrementAction);
store.dispatch(incrementAction);
store.dispatch(incrementAction);

export {};
