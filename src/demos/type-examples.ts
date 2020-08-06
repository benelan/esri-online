export interface Person {
  firstName: string;
  address: {
    street: string;
    city: string;
  };
}

export interface User extends Address {
  firstName: string;
}

export interface Address {
  street: string;
  city?: string;
  state: string;
}

export interface CustomGreeterProps {
  firstName: string;
  lastName?: string;
  // lastName: string | undefined
}

export type CustomGreeterAndAddress = CustomGreeterProps & Partial<Address>;
