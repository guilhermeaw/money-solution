import { Repository } from 'typeorm';

import AppDataSource from '@shared/database/ormconfig';
import Transaction from '../entities/Transaction';
import { ICreateTransactionDTO } from '../dtos/ICreateTransactionDTO';

export default class TransactionsRepository {
  private ormRepository: Repository<Transaction>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(Transaction);
  }

  public async create(
    transactionData: ICreateTransactionDTO,
  ): Promise<Transaction> {
    const transaction = this.ormRepository.create(transactionData);
    await this.ormRepository.save(transaction);

    return transaction;
  }

  public async delete(id: number): Promise<void> {
    this.ormRepository.delete({ id });
  }

  public async listByUserId(user_id: number): Promise<Transaction[]> {
    return this.ormRepository.find({
      where: {
        user_id,
      },
    });
  }
}
