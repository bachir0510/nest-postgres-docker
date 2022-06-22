import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Student {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ length: 35 })
  nia: string;

  @Column({ length: 25 })
  name: string;

  @Column({ length: 25 })
  lastName: string;

  @Column({ length: 25 })
  motherName: string;

  @Column({ length: 15 })
  group: string;

  @Column({ length: 15 })
  classGroup: string;
}