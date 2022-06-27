import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { HttpConfigService } from '../../domain/config/http.config';
import { BookClient } from './book.client';
import { BookModule } from './book.module';
import { BookService } from './book.service';

@Module({
  imports: [
    HttpModule.registerAsync({
      useClass: HttpConfigService,
    }),
  ],
  exports: [BookService, BookClient],
  providers: [BookService, BookClient],
})
export class ServiceModule {}
