import { TransactionType } from '../infra/typeorm/entities/Transaction';
import FakeTransactionsRepository from '../repositories/fakes/FakeTransactionsRepository';
import CreateTransactionService from './CreateTransactionService';

let createTransaction: CreateTransactionService;
let transactionsRepository: FakeTransactionsRepository;

describe('CreateTransaction', () => {
  beforeEach(() => {
    transactionsRepository = new FakeTransactionsRepository();

    createTransaction = new CreateTransactionService(transactionsRepository);
  });

  it('should be able to create transaction', async () => {
    const transaction = await createTransaction.execute({
      amount: 200,
      category_id: 1,
      title: 'Farmácia',
      type: TransactionType.OUTCOME,
      user_id: 1,
    });

    expect(transaction).toHaveProperty('id');
  });
});
