import TransactionCategory from '../entities/TransactionCategory';
import TransactionCategoriesRepository from '../repositories/TransactionCategoriesRepository';

export default class ListAllTransactionCategoriesService {
  private transactionCategoriesRepository: TransactionCategoriesRepository;

  constructor() {
    this.transactionCategoriesRepository =
      new TransactionCategoriesRepository();
  }

  public async execute(): Promise<TransactionCategory[]> {
    return this.transactionCategoriesRepository.listAll();
  }
}
