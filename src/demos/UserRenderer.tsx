/* eslint-disable */

import React from 'react';
import { users } from '@speedingplanet/rest-server';
// @ts-ignore
import uuid from 'react-uuid';

const person = {
  firstName: 'John',
  lastName: 'Paxton'
}

const entryfied = [['firstName', 'John'], ['lastName', 'Paxton']];

// TODO: generics?
function mapper(obj: any) {
  // TODO: Should be a JSXElement, I think
  const results: any[] = [];

  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value === 'object' && value !== null) {
      results.push(...mapper(value));
    } else {
      results.push(
        // TODO: path + key
        <tr key={key}>
          <td>{key}</td>
          <td>{value as any}</td>
        </tr>,
      );
    }
  });
  return results;
}

const UserRenderer = () => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Key</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>{mapper(users[0])}</tbody>
    </table>
  );
};

export default UserRenderer;
