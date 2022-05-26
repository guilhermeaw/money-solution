import AppError from '@shared/errors/AppError';
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
    const categoryAlreadyExists =
      await this.transactionCategoriesRepository.findByTitle(title);

    if (categoryAlreadyExists) {
      throw new AppError('Já existe uma categoria com este nome.');
    }

    return this.transactionCategoriesRepository.create({
      description,
      title,
    });
  }
}
