import { Module } from '@nestjs/common';
import { ServiceModule } from '../../../infrastructure/services/service.module';
import { GetBookApi } from './getApi.book';

@Module({
  imports: [ServiceModule],
  providers: [GetBookApi],
  exports: [GetBookApi],
})
export class BookModule {}
