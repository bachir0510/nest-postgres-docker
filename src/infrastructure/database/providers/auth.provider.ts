import { Connection } from 'typeorm';
import { User } from '../../../domain/entitys/user.entity';

export const authProvider = [
  {
    provide: User.name,
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: ['DATABASE_CONNECTION'],
  },
];