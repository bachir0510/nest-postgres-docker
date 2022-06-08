import { Connection } from 'typeorm';
import { Student } from '../../../domain/entitys/student.entity';
import { User } from '../../../domain/entitys/user.entity';

export const userProvider = [
  {
    provide: User.name,
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: ['DATABASE_CONNECTION'],
  },
];
