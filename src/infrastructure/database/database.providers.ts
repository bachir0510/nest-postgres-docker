import {  DataSource } from 'typeorm';
import * as path from 'path';


export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => {
      const dataSource = await new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'bachir',
        password: 'postgres-password',
        database: 'postgres',
        entities: [path.resolve(__dirname + '/../../**/*.entity{.ts,.js}')],
        synchronize: true,
      });
      console.log(__dirname + '/../../**/*.entity{.ts,.js}');
      return dataSource.initialize() ;

    },
  },
];


