import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum TransactionType {
  INCOME = 'income',
  OUTCOME = 'outcome',
}

@Entity('transactions')
export default class Transaction {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  title: string;

  @Column()
  amount: number;

  @Column('enum', { enum: TransactionType })
  type: TransactionType;

  @Column()
  category: string;

  @CreateDateColumn()
  created_at: Date;
}
