import React from 'react';
import { people } from './use-reducer/people';

const names = [
  'Adam',
  'Alex',
  'Ben',
  'Brian',
  'Sameer',
  'Ryan',
  'Pat',
  'Lingtao',
];

/*
names.forEach(function (item, index, originalArray) {
  console.log(`Name: ${item} at index ${index}`);
});

names.forEach((item, index) => {
  console.log(`Name: ${item} at index ${index}`);
});

const allCapsNames = names.map((name) => {
  return name.toUpperCase();
});

const allCapsNamesShorter = names.map((name) => name.toUpperCase())
*/

const GridExample = () => {
  return (
    <div>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <ObjectGrid />
    </div>
  );
};

const ObjectGrid = () => {
  return (
    <ul>
      {people.map((person) => (
        <li key={`${person.id}-${person.firstName}`}>
          {person.firstName} {person.lastName}
        </li>
      ))}
    </ul>
  );
};

export default GridExample;
