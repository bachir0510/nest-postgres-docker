import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  nia: string;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column()
  motherName: string;

  @Column()
  group: string;

  @Column()
  class: string;
}
