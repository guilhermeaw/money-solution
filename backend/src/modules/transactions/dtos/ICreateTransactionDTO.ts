import Transaction from '../infra/typeorm/entities/Transaction';

export type ICreateTransactionDTO = Omit<
  Transaction,
  'id' | 'user' | 'created_at' | 'category'
>;
