import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 20 })
  username: string;
  @Column()
  password: string;
  @Column({ unique: true })
  email: string;
  @Column({ default: true })
  isActive: boolean;
}
