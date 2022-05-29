import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';

import User from '@modules/users/entities/User';
import TransactionCategory from './TransactionCategory';

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

  @Column({ type: 'money' })
  amount: number;

  @Column('enum', { enum: TransactionType })
  type: TransactionType;

  @Column()
  category_id: number;

  @ManyToOne(() => TransactionCategory, { eager: true })
  @JoinColumn({ name: 'category_id' })
  category: TransactionCategory;

  @Column()
  user_id: number;

  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @CreateDateColumn()
  created_at: Date;
}
