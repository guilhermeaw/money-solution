import { TransactionType } from '../infra/typeorm/entities/Transaction';
import FakeTransactionsRepository from '../repositories/fakes/FakeTransactionsRepository';
import ListMyTransactionsService from './ListMyTransactionsService';

let fakeTransactionsRepository: FakeTransactionsRepository;
let listMyTransactionsService: ListMyTransactionsService;

describe('List my transactions', () => {
  beforeEach(() => {
    fakeTransactionsRepository = new FakeTransactionsRepository();
    listMyTransactionsService = new ListMyTransactionsService(
      fakeTransactionsRepository,
    );
  });

  it('should list only user transactions', async () => {
    const userTransaction1 = await fakeTransactionsRepository.create({
      amount: 200,
      category_id: 1,
      title: 'Farmácia',
      type: TransactionType.OUTCOME,
      user_id: 1,
    });

    const userTransaction2 = await fakeTransactionsRepository.create({
      ...userTransaction1,
      title: 'Contas gerais',
    });

    await fakeTransactionsRepository.create({
      ...userTransaction1,
      title: 'Conta de luz',
      user_id: 2,
    });

    const userTransactions = await listMyTransactionsService.execute({
      user_id: 1,
    });

    expect(userTransactions).toStrictEqual([
      userTransaction1,
      userTransaction2,
    ]);
  });
});
