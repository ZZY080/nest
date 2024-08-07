import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 20 })
  username: string;
  @Column({ unique: true })
  email: string;
  @Column()
  password: string;
  @Column({ default: true })
  isActive: boolean;
}
