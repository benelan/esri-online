import React from 'react';
import { Provider, connect } from 'react-redux';
import { store, StoreState } from './create-store';

const ReduxToolkitThunk = () => {
  return (
    <Provider store={store}>
      <div>
        <ReduxTransactionsCount />
      </div>
    </Provider>
  );
};

const TransactionsCount = ({ count }: { count: number }) => (
  <p>There are {count} transactions</p>
);

const mapStateToProps = (state: StoreState) => ({
  count: state.allIds.length,
});

const ReduxTransactionsCount = connect(mapStateToProps)(TransactionsCount);

export default ReduxToolkitThunk;
