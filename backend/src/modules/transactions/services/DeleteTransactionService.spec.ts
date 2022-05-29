import AppError from '@shared/errors/AppError';
import { TransactionType } from '../infra/typeorm/entities/Transaction';
import FakeTransactionsRepository from '../repositories/fakes/FakeTransactionsRepository';
import DeleteTransactionService from './DeleteTransactionService';

let fakeTransactionsRepository: FakeTransactionsRepository;
let deleteTransaction: DeleteTransactionService;

describe('Delete transaction', () => {
  beforeEach(() => {
    fakeTransactionsRepository = new FakeTransactionsRepository();

    deleteTransaction = new DeleteTransactionService(
      fakeTransactionsRepository,
    );
  });

  it('should be able to delete transaction with success', async () => {
    const transaction = await fakeTransactionsRepository.create({
      amount: 200,
      category_id: 1,
      title: 'Farmácia',
      type: TransactionType.OUTCOME,
      user_id: 1,
    });

    deleteTransaction.execute(String(transaction.id));
  });

  it('should not be able to delete if ID is not an integer', () => {
    expect(deleteTransaction.execute('not-integer')).rejects.toBeInstanceOf(
      AppError,
    );
  });

  it('should not be able to delete if not found any transaction with passed ID', () => {
    expect(deleteTransaction.execute('1')).rejects.toBeInstanceOf(AppError);
  });
});
