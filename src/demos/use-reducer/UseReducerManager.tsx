import React, { useReducer } from 'react';
import { Person, people } from './people';
import UseReducerGrid from './UseReducerGrid';
import * as lodash from 'lodash';
import UseReducerFilter from './UseReducerFilter';

import './use-reducer.css';

type SortDirection = 'asc' | 'desc';
export type SortField = keyof Person;
export type FilterFields = keyof Person | 'any'

export interface PeopleFilter {
  filterField: FilterFields;
  filterText: string;
}

interface DemoState {
  people: Person[];
  peopleFilter?: PeopleFilter;
  highlightFiltered: boolean;
  sortField?: SortField;
  sortDirection: SortDirection;
}

const initialState: DemoState = {
  people,
  highlightFiltered: true,
  sortDirection: 'asc',
};

type Action =
  | { type: 'sort'; payload: SortField }
  | { type: 'filter'; payload: PeopleFilter }
  | { type: 'highlight'; payload: boolean };

function reducer(state: DemoState, action: Action): DemoState {
  switch (action.type) {
    case 'sort': {
      let sortDirection: SortDirection = 'asc';
      if (state.sortField === action.payload && state.sortDirection === 'asc') {
        sortDirection = 'desc';
      }
      return { ...state, sortDirection, sortField: action.payload };
    }
    case 'filter':
      return { ...state, peopleFilter: action.payload };
    case 'highlight':
      return { ...state, highlightFiltered: action.payload };
    default:
      throw new Error('No new state!');
  }
}

const UseReducerManager = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  let people = state.people;

  // TODO: Refactor here and in UseReducerGrid to use a Context object 
  // to include a selector to get the appropriate set of records
  if (!state.highlightFiltered) {
    people = people.filter((person) => {
      if (!state.peopleFilter) return false;
      const filterRe = new RegExp(state.peopleFilter.filterText, 'i');
      let searchText = Object.values(person).join(' ');
      if (state.peopleFilter.filterField !== 'any') {
        searchText = person[state.peopleFilter.filterField];
      }
      // return person[filter.filterField].includes(filter.filterText);
      return filterRe.test(searchText) ? 'highlight' : '';
      });
  }

  const displayPeople = lodash.orderBy(
    people,
    state.sortField,
    state.sortDirection,
  );

  return (
    <section>
      <div className="form-check mb-2">
        <input
          type="checkbox"
          id="highlight-filtered"
          className="form-check-input"
          checked={state.highlightFiltered}
          onChange={(e) => {
            dispatch({ type: 'highlight', payload: e.currentTarget.checked });
          }}
        />
        <label htmlFor="highlight-filtered" className="form-check-label">
          Highlight matches
        </label>
      </div>
      <UseReducerFilter
        callFilter={(filter) => dispatch({ type: 'filter', payload: filter })}
      />
      <UseReducerGrid
        people={displayPeople}
        highlightFilter={state.highlightFiltered ? state.peopleFilter : undefined}
        clickHeader={(field) => dispatch({ type: 'sort', payload: field })}
      />
    </section>
  );
};

export default UseReducerManager;
