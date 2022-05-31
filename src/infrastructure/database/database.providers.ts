import { createConnection } from 'typeorm';
import * as path from 'path';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => {
      const fn = await createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'postgres',
        entities: [path.resolve(__dirname + '/../../**/*.entity{.ts,.js}')],
        synchronize: true,
      });
      return fn;
    },
  },
];
