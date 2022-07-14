import { Connection } from 'typeorm';
import { Book } from '../../../domain/entity/book.entity';

export const bookProvider = [
  {
    provide: Book.name,
    useFactory: (connection: Connection) => connection.getRepository(Book),
    inject: ['DATABASE_CONNECTION'],
  },
];
