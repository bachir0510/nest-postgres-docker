import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { HttpConfigService } from '../../domain/config/http.config';
import { BookClient } from './book/book.client';
import { BookConfig } from './book.config';
import { BookService } from './book/book.service';

@Module({
  imports: [
    HttpModule.registerAsync({
      useClass: HttpConfigService,
    }),
  ],
  exports: [BookService, BookClient, BookConfig],
  providers: [BookService, BookClient, BookConfig],
})
export class ServiceModule {}
