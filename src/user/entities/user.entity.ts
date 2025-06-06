import { IsEmail, MinLength } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column()
  @MinLength(6)
  passwordHash: string;

  @CreateDateColumn()
  readonly createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
