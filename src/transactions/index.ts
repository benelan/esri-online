import { ZippayRecord } from '../common';

export type TransactionType = 'payment' | 'charge';
export type TransactionStatus = 'settled' | 'open';
export type VisibilityTypes = 'public' | 'private';

export interface Transaction extends ZippayRecord {
  payorId: string;
  payeeId: string;
  txDate: string | Date;
  txType: TransactionType;
  txStatus: TransactionStatus;
  reason: string;
  visibility: VisibilityTypes;
}
