import { Repository } from 'typeorm';

import AppDataSource from '@shared/database/ormconfig';
import TransactionCategory from '../entities/TransactionCategory';

export default class TransactionCategoriesRepository {
  private ormRepository: Repository<TransactionCategory>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(TransactionCategory);
  }

  public async create(
    categoryData: Omit<TransactionCategory, 'id'>,
  ): Promise<TransactionCategory> {
    const category = this.ormRepository.create(categoryData);
    await this.ormRepository.save(categoryData);

    return category;
  }

  public async findByTitle(title: string): Promise<TransactionCategory[]> {
    return this.ormRepository.find({ where: { title } });
  }

  public async listAll(): Promise<TransactionCategory[]> {
    return this.ormRepository.find();
  }
}
