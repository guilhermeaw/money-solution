import { ICreateTransactionDTO } from '../dtos/ICreateTransactionDTO';
import Transaction from '../entities/Transaction';
import TransactionsRepository from '../repositories/TransactionsRepository';

export default class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor() {
    this.transactionsRepository = new TransactionsRepository();
  }

  public async execute({
    amount,
    category,
    title,
    type,
    user_id,
  }: ICreateTransactionDTO): Promise<Transaction> {
    return this.transactionsRepository.create({
      amount,
      category,
      title,
      type,
      user_id,
    });
  }
}
