// import {createStore} from '@reduxjs/toolkit';
const { createSlice, configureStore, combineReducers } = require('@reduxjs/toolkit');

// EITHER
// createSlice => { reducer(), actions{}, ... }
const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1,
    add: (state, {payload}) => state + payload
  }
});

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addItem: (state, {payload}) => state.push(payload)
  }
});

const rootReducer = combineReducers({
  counter: counterSlice.reducer,
  items: itemsSlice.reducer
});

// OR
const counterWithOtherPropsSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    items: [],
  },
  reducers: {
    increment: state => state.value + 1,
    decrement: state => state.value - 1,
    add: (state, {payload}) => state.value + payload,
    addItem: (state, {payload}) => state.items.push(payload)
  }
});

const store = configureStore({
  reducer: rootReducer
});
const { increment, decrement, add } = counterSlice.actions

let lastState = {};

store.subscribe(() => {
  let nextState = store.getState();
  if (nextState !== lastState) {
    console.log('Counter is now: ', store.getState().counter);
  }

  lastState = nextState;
});

store.dispatch(increment());
store.dispatch(increment());
store.dispatch({ type: 'foo' });
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(add(5));
store.dispatch(add(10));