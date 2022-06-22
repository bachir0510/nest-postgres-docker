import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { hash } from 'bcryptjs';
import { Exclude } from 'class-transformer';

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ length: 25 })
  userName: string;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 100 })
  password: string;

  @Column({ nullable: true })
  @Exclude()
  refreshtoken:string;

  @Column({ nullable: true })
  @Exclude()
  refreshtokenexpires:string;

  @CreateDateColumn()
  createdOn: Date;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (!this.password) {
      return;
    }
    this.password = await hash(this.password, 10);
  }
}
