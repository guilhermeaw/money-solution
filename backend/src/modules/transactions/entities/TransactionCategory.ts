import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('transaction_categories')
export default class TransactionCategory {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ unique: true })
  title: string;

  @Column({ type: 'text' })
  description: string;
}
