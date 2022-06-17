import { Connection } from 'typeorm';
import { Student } from '../../../domain/entities/student.entity';

export const studentProvider = [
  {
    provide: Student.name,
    useFactory: (connection: Connection) => connection.getRepository(Student),
    inject: ['DATABASE_CONNECTION'],
  },
];
