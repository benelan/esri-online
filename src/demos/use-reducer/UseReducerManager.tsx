import React, { useReducer } from 'react';
import { Person, people } from './people';
import UseReducerGrid from './UseReducerGrid';
import * as lodash from 'lodash';
import UseReducerFilter from './UseReducerFilter';

import './use-reducer.css';

type SortDirection = 'asc' | 'desc';
export type SortField = keyof Person | '';
export interface PeopleFilter {
  filterField: keyof Person | '';
  filterText: string;
}

interface DemoState {
  people: Person[];
  peopleFilter: PeopleFilter | null;
  sortField: SortField;
  sortDirection: SortDirection;
}

const initialState: DemoState = {
  people,
  peopleFilter: null,
  sortField: '',
  sortDirection: 'asc',
};

type Action = { type: 'sort'; payload: SortField };

function reducer(state: DemoState, action: Action): DemoState {
  switch (action.type) {
    case 'sort': {
      let sortDirection: SortDirection = 'asc';
      if (state.sortField === action.payload && state.sortDirection === 'asc') {
        sortDirection = 'desc';
      }
      return { ...state, sortDirection, sortField: action.payload };
    }
    default:
      return state;
  }
}

const UseReducerManager = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayPeople = lodash.orderBy(
    state.people,
    state.sortField,
    state.sortDirection,
  );

  return (
    <section>
      <UseReducerFilter callFilter={() => console.log('callFilter')} />
      <UseReducerGrid
        people={displayPeople}
        clickHeader={(field) => dispatch({ type: 'sort', payload: field })}
      />
    </section>
  );
};

export default UseReducerManager;
