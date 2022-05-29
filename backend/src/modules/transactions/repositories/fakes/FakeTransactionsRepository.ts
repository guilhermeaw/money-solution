import { ICreateTransactionDTO } from '@modules/transactions/dtos/ICreateTransactionDTO';
import Transaction from '@modules/transactions/infra/typeorm/entities/Transaction';
import ITransactionsRepository from '../ITransactionsRepository';

class FakeTransactionsRepository implements ITransactionsRepository {
  private transactions: Transaction[] = [];

  private id = 1;

  public async create(
    transactionData: ICreateTransactionDTO,
  ): Promise<Transaction> {
    const transaction = new Transaction();

    Object.assign(transaction, { id: this.id }, transactionData);

    this.id += 1;

    this.transactions.push(transaction);

    return transaction;
  }

  public async delete(id: number): Promise<void> {
    const indexToRemove = this.transactions.findIndex(item => item.id === id);

    this.transactions.splice(indexToRemove, 1);
  }

  public async findById(id: number): Promise<Transaction | null> {
    return this.transactions.find(item => item.id === id) || null;
  }

  public async listByUserId(user_id: number): Promise<Transaction[]> {
    return this.transactions.filter(item => item.user_id === user_id);
  }
}

export default FakeTransactionsRepository;
