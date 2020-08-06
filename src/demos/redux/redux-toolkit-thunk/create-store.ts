import {
  createSlice,
  PayloadAction,
  Action,
  configureStore,
} from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { Transaction, dao } from '@speedingplanet/rest-server';

interface ById<T> {
  [key: string]: T;
}

export interface StoreState {
  byIds: ById<Transaction>;
  allIds: string[];
  isLoading: boolean;
  error?: Error | null;
}

const initialState: StoreState = {
  byIds: {},
  allIds: [],
  isLoading: false,
};

// <return Value, store state, extra arguments (we're not using any), dispatch action types>
type TransactionsThunk = ThunkAction<void, StoreState, unknown, Action<string>>;

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    requestTransactions: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    requestTransactionsSuccess: (
      state,
      action: PayloadAction<Transaction[]>,
    ) => {
      state.isLoading = false;
      state.byIds = {};
      state.allIds = [];
      action.payload.forEach((transaction) => {
        state.byIds[transaction.id] = transaction;
        state.allIds.push(transaction.id);
      });
    },
    requestTransactionsError: (state, action: PayloadAction<Error>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  requestTransactions,
  requestTransactionsError,
  requestTransactionsSuccess,
} = transactionSlice.actions;

export const reducer = transactionSlice.reducer;

export const fetchTransactionsPromise = (): TransactionsThunk => {
  return function (dispatch) {
    dispatch(requestTransactions());
    dao
      .findAllTransactions()
      .then((results) => dispatch(requestTransactionsSuccess(results.data)))
      .catch((error) => dispatch(requestTransactionsError(error)));
  };
};

export const fetchTransactions = (): TransactionsThunk => async (dispatch) => {
  dispatch(requestTransactions());
  try {
    const results = await dao.findAllTransactions();
    dispatch(requestTransactionsSuccess(results.data));
  } catch (error) {
    dispatch(requestTransactionsError(error));
  }
};

export const store = configureStore(transactionSlice);

store.dispatch(fetchTransactions());
