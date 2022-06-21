import { Module } from '@nestjs/common';
import { databaseProvidersTest } from '../../../test/infrastructure/database.providers';
import { databaseProviders } from './database.providers';

@Module({
  providers: [...databaseProvidersTest],
  exports: [...databaseProvidersTest],
})
export class DatabaseModule {}
