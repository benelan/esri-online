import { Address, ZippayRecord } from '../common';

type UserType = 'corporation' | 'person';

export interface User extends ZippayRecord {
  displayName: string;
  payeeId: string;
  email: string;
  userType: UserType;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  address: Address;
}
