import { Injectable } from '@nestjs/common';
import { BookService } from '../../../infrastructure/services/book/book.service';
import { BookDTO } from '../../dto/book/book.dto';

@Injectable()
export class GetBookApi {
  constructor(private readonly bookService: BookService) {}

  async call(url: string): Promise<BookDTO[]> {
    return await this.bookService.getCategorys(url);
  }
}
