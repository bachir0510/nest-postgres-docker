import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    type: 'varchar',
    length: 100,
    default: '',
    nullable: true
  })
  userName: string;

  @Column({
    type: 'varchar',
    length: 150,
    nullable: false
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
    select: false
  })
  password: string;


}
