import { inject, injectable } from 'tsyringe';

import Transaction from '../infra/typeorm/entities/Transaction';
import ITransactionsRepository from '../repositories/ITransactionsRepository';

type IRequest = {
  user_id: number;
};

@injectable()
export default class ListMyTransactionsService {
  constructor(
    @inject('TransactionsRepository')
    private transactionsRepository: ITransactionsRepository,
  ) {}

  public async execute({ user_id }: IRequest): Promise<Transaction[]> {
    return this.transactionsRepository.listByUserId(user_id);
  }
}
