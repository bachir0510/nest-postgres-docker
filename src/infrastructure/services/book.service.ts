import { Injectable } from '@nestjs/common';
import { BookClient } from './book.client';

@Injectable()
export class BookService {
  constructor(private readonly getBook: BookClient) {}

  async getCategorys() {
    return this.getBook.get();
  }
}
