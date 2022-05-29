import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import ITransactionsRepository from '../repositories/ITransactionsRepository';

@injectable()
export default class DeleteTransactionService {
  constructor(
    @inject('TransactionsRepository')
    private transactionsRepository: ITransactionsRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    const idAsNumber = Number(id);

    if (!Number.isInteger(idAsNumber)) {
      throw new AppError('O ID informado não é do tipo inteiro.');
    }

    const foundTransactionWithId = await this.transactionsRepository.findById(
      idAsNumber,
    );

    if (!foundTransactionWithId) {
      throw new AppError('Transação não encontrada.');
    }

    await this.transactionsRepository.delete(idAsNumber);
  }
}
