import TransactionCategory from '../infra/typeorm/entities/TransactionCategory';

export default interface ITransactionCategoriesRepository {
  create(
    categoryData: Omit<TransactionCategory, 'id'>,
  ): Promise<TransactionCategory>;
  findByTitle(title: string): Promise<TransactionCategory | null>;
  listAll(): Promise<TransactionCategory[]>;
}
