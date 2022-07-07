import { Module } from '@nestjs/common';
import { BookClient } from './book.client';
import { BookConfig } from './book.config';

@Module({
  providers: [BookClient, BookConfig],
  exports: [BookModule, BookConfig],
})
export class BookModule {}
