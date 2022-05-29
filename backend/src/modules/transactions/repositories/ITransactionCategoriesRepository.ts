import TransactionCategory from '../infra/typeorm/entities/TransactionCategory';

export default interface ITransactionCategoriesRepository {
  create(
    categoryData: Omit<TransactionCategory, 'id'>,
  ): Promise<TransactionCategory>;
  findByTitle(title: string): Promise<TransactionCategory[]>;
  listAll(): Promise<TransactionCategory[]>;
}
