import { Connection } from 'typeorm';
import { User } from '../../../domain/entitiy/user.entity';

export const userProvider = [
  {
    provide: User.name,
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: ['DATABASE_CONNECTION'],
  },
];
