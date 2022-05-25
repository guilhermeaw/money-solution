import TransactionCategory from '../entities/TransactionCategory';
import TransactionCategoriesRepository from '../repositories/TransactionCategoriesRepository';

export default class CreateTransactionCategoryService {
  private transactionCategoriesRepository: TransactionCategoriesRepository;

  constructor() {
    this.transactionCategoriesRepository =
      new TransactionCategoriesRepository();
  }

  public async execute({
    description,
    title,
  }: Omit<TransactionCategory, 'id'>): Promise<TransactionCategory> {
    return this.transactionCategoriesRepository.create({
      description,
      title,
    });
  }
}
