export type HasId = Record<'id' | string, string | number>;

export interface ZippayRecord {
  id: string;
  version: number;
  lastUpdated: string | Date;
  active: true;
}

export type SortDirection = 'asc' | 'desc';

export interface ColumnConfig {
  field: string;
  label: string;
  sortDirection: SortDirection;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}
