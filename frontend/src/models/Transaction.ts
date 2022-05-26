import { TransactionCategory } from './TransactionCategory';

export enum TransactionType {
  INCOME = 'income',
  OUTCOME = 'outcome',
}

export interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: TransactionType;
  category: TransactionCategory;
  created_at: Date;
}
