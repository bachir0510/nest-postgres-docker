import { createConnection } from 'typeorm';

export const databaseProvidersTest = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => {
      const fn = await createConnection({
        name: 'default',
        type: 'better-sqlite3',
        database: ':memory:',
        entities: ['src/entity/**/*.ts'],
        synchronize: true,
        
      });
      return fn;
    },
  },
];
