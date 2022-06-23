import { Injectable } from '@nestjs/common';
import { BookService } from '../../../infrastructure/services/book.service';

@Injectable()
export class GetBookApi {
  constructor(private readonly bookService: BookService) {}

  async call(): Promise<any> {
    return await this.bookService.getCategorys();
  }
}