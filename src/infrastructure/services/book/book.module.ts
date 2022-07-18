import { Module } from '@nestjs/common';
import { BookClient } from './book.client';
import { BookConfig } from '../book.config';
import { bookProvider } from '../../database/providers/book.provider';

@Module({
  providers: [BookClient, BookConfig],
  exports: [BookModule, BookConfig],
})
export class BookModule {}
