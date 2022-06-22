import { Connection, createConnection } from 'typeorm';
import * as path from 'path';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => {
      let connection: Connection;
      try {
        connection = await createConnection({
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'postgres',
          password: 'postgres',
          database: 'school_app',
          entities: [path.resolve(__dirname + '/../../**/*.entity{.ts,.js}')],
          synchronize: true,
          dropSchema: true,
        });
      } catch (error) {
        console.error(error);
      }
      return connection;
    },
  },
];
