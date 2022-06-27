import { Module } from '@nestjs/common';
import { BookClient } from './book.client';

@Module({
  providers: [BookClient],
  exports: [BookModule],
})
export class BookModule {}
