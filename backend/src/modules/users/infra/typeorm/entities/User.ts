import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
export default class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;
}
