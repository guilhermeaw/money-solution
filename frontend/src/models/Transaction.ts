export enum TransactionType {
  INCOME = 'income',
  OUTCOME = 'outcome',
}

export interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: TransactionType;
  category_id: number;
  created_at: Date;
}
