import React from 'react';
import { Person } from './people';
import { SortField, PeopleFilter } from './UseReducerManager';

interface UseReducerGridProps {
  people: Person[];
  filter?: PeopleFilter;
  clickHeader?: (header: SortField) => void;
}

const UseReducerGrid = ({
  people,
  filter,
  clickHeader,
}: UseReducerGridProps) => {
  const highlightRow = (person: Person): string => {
    if (filter) {
      if (filter.filterText === '') {
        return '';
      } else {
        const filterRe = new RegExp(filter.filterText, 'i');
        let searchText = Object.values(person).join(' ');
        if (filter.filterField !== '') {
          searchText = person[filter.filterField];
        }
        // return person[filter.filterField].includes(filter.filterText);
        return filterRe.test(searchText) ? 'highlight' : '';
      }
    }
    return '';
  };

  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th onClick={() => clickHeader && clickHeader('firstName')}>
            First Name
          </th>
          <th onClick={() => clickHeader && clickHeader('lastName')}>
            Last Name
          </th>
          <th onClick={() => clickHeader && clickHeader('state')}>State</th>
        </tr>
      </thead>
      <tbody>
        {people.map((person) => (
          <tr key={person.id} className={highlightRow(person)}>
            <td>{person.firstName}</td>
            <td>{person.lastName}</td>
            <td>{person.state}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UseReducerGrid;
