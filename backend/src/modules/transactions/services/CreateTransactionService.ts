import { inject, injectable } from 'tsyringe';

import { ICreateTransactionDTO } from '../dtos/ICreateTransactionDTO';
import Transaction from '../infra/typeorm/entities/Transaction';
import ITransactionsRepository from '../repositories/ITransactionsRepository';

@injectable()
export default class CreateTransactionService {
  constructor(
    @inject('TransactionsRepository')
    private transactionsRepository: ITransactionsRepository,
  ) {}

  public async execute({
    amount,
    category_id,
    title,
    type,
    user_id,
  }: ICreateTransactionDTO): Promise<Transaction> {
    return this.transactionsRepository.create({
      amount,
      category_id,
      title,
      type,
      user_id,
    });
  }
}
