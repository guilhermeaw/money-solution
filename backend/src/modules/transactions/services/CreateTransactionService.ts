import { ICreateTransactionDTO } from '../dtos/ICreateTransactionDTO';
import Transaction from '../infra/typeorm/entities/Transaction';
import TransactionsRepository from '../infra/typeorm/repositories/TransactionsRepository';

export default class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor() {
    this.transactionsRepository = new TransactionsRepository();
  }

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
