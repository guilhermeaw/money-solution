import { ICreateTransactionDTO } from '../dtos/ICreateTransactionDTO';
import Transaction from '../infra/typeorm/entities/Transaction';

export default interface ITransactionsRepository {
  create(transactionData: ICreateTransactionDTO): Promise<Transaction>;
  delete(id: number): Promise<void>;
  findById(id: number): Promise<Transaction | null>;
  listByUserId(user_id: number): Promise<Transaction[]>;
}
