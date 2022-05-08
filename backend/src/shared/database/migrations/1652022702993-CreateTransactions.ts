import { MigrationInterface, QueryRunner, Table } from 'typeorm';

import { TransactionType } from '@modules/transactions/entities/Transaction';

export class CreateTransactions1652022702993 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'transactions',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'amount',
            type: 'numeric',
            precision: 12,
            scale: 2,
          },
          {
            name: 'type',
            type: 'enum',
            enum: Object.values(TransactionType),
          },
          {
            name: 'category',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('transactions');
  }
}
