import React, { useState, FormEvent } from 'react';
import { PeopleFilter } from './UseReducerManager';
import { Person } from './people';

interface UseReducerFilterProps {
  callFilter: (filter: PeopleFilter) => void;
}

const UseReducerFilter = ({ callFilter }: UseReducerFilterProps) => {
  const [filterText, setFilterText] = useState('');
  const [filterField, setFilterField] = useState<keyof Person | ''>('');

  const updateState = (
    event: FormEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    if (event.currentTarget.id === 'filter-text') {
      setFilterText(event.currentTarget.value);
    } else if (event.currentTarget.id === 'filter-field') {
      setFilterField(event.currentTarget.value as keyof Person | '');
    }
  };

  return (
    <form className="form-inline mb-2">
      {/* <div className="form-group"> */}
      <label htmlFor="filter-text">Filter text: </label>
      <input
        type="text"
        id="filter-text"
        className="form-control mx-sm-2 ml-sm-2 flex-grow-1"
        value={filterText}
        onChange={updateState}
      />
      {/* </div> */}
      {/* <div className="form-group"> */}
      <label htmlFor="filter-field">Field: </label>
      <select
        id="filter-field"
        className="form-control mx-sm-2 flex-grow-1"
        value={filterField}
        onChange={updateState}
      >
        <option value="">None</option>
        <option value="firstName">First Name</option>
        <option value="lastName">Last Name</option>
        <option value="state">State</option>
      </select>
      {/* </div> */}
      {/* <div> */}
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => callFilter({ filterField, filterText })}
      >
        Filter
      </button>
      {/* </div> */}
    </form>
  );
};

export default UseReducerFilter;
