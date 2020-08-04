import React from 'react';

interface PersonGreeterProps {
  person: person;
}

interface person {
  firstName: string;
  lastName: string;
  state: string;
}

const PersonGreeter = ({ person }: PersonGreeterProps) => {
  return (
    <ul>
      <li>{person.firstName}</li>
      <li>{person.lastName}</li>
      <li>{person.state}</li>
    </ul>
  );
};

const UsingPersonGreeter = () => {
  const examplePerson = {
    firstName: 'John',
    lastName: 'Paxton',
    state: 'NJ',
  };

  return <PersonGreeter person={examplePerson} />;
};

export default PersonGreeter;
