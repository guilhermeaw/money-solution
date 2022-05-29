import Transaction from '../infra/typeorm/entities/Transaction';
import TransactionsRepository from '../infra/typeorm/repositories/TransactionsRepository';

type IRequest = {
  user_id: number;
};

export default class ListMyTransactionsService {
  private transactionsRepository: TransactionsRepository;

  constructor() {
    this.transactionsRepository = new TransactionsRepository();
  }

  public async execute({ user_id }: IRequest): Promise<Transaction[]> {
    return this.transactionsRepository.listByUserId(user_id);
  }
}
