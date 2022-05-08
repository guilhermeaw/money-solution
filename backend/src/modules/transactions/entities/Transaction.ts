import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';

import User from '@modules/users/entities/User';

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

  @Column()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @CreateDateColumn()
  created_at: Date;
}
