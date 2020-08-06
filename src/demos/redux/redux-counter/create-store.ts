import { configureStore } from '@reduxjs/toolkit';
import reducer from './redux-counter-slice';

const store = configureStore({ reducer });
export default store;
