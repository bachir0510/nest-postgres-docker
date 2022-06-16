import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { hash } from 'bcryptjs';

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column({
    type: 'varchar',
  })
  userName: string;

  @Column({
    type: 'varchar',
    length: 150,
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 100,
  })
  password: string;

  @Column({
    type: 'boolean',
    default: false,
  })
  active: boolean;

  @Column({
    type: 'uuid',
    unique: true,
  })
  activationToken: string;

  @Column({
    nullable: true,
  })
  refreshtoken: string;

  @Column({
    nullable: true,
  })
  refreshtokenexpires: string;

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
