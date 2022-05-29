import AppError from '@shared/errors/AppError';
import TransactionsRepository from '../infra/typeorm/repositories/TransactionsRepository';

export default class DeleteTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor() {
    this.transactionsRepository = new TransactionsRepository();
  }

  public async execute(id: string): Promise<void> {
    const idAsNumber = Number(id);

    if (!Number.isInteger(idAsNumber)) {
      throw new AppError('O ID informado não é do tipo inteiro.');
    }

    await this.transactionsRepository.delete(idAsNumber);
  }
}
