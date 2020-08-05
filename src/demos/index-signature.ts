export interface ExtensiblePerson {
  firstName: string;
  lastName: string;
  id: string;
  state: string;
  [x: string]: string;
}

export interface Person {
  firstName: string;
  lastName: string;
  id: string;
  state: string;
  other?: {
    foo: string;
    bar: string;
  }
}

export const people: Person[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Paxton',
    state: 'NJ',
    other: {
      foo: 'foo',
      bar: 'bar'
    }
  },
  {
    id: '2',
    firstName: 'Lauren',
    lastName: 'Boyd',
    state: 'CA',
  },

  {
    id: '3',
    firstName: 'Pat',
    lastName: 'Cruz',
    state: 'CA',
  },
  {
    id: '4',
    firstName: 'Butch',
    lastName: 'Fragale',
    state: 'MD',
  },
  {
    id: '5',
    firstName: 'Lingtao',
    lastName: 'Xie',
    state: 'NC',
  },
  {
    id: '6',
    firstName: 'Alex',
    lastName: 'Ela',
    state: 'CO',
  },
  {
    id: '7',
    firstName: 'Dan',
    lastName: 'Paxton',
    state: 'NJ',
  },
];

const keys: Array<keyof Person> = ['firstName', 'lastName', 'other'];

people.forEach((person) => {
  keys.forEach((key) => console.log(`The ${key} is ${person[key]}`));
});
