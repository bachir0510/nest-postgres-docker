import { Injectable } from '@nestjs/common';
import { BookConfig } from '../book.config';
import { BookAdapter } from './adapter/book.adapter';
import { BookClient } from './book.client';
import { IBook } from './interface/book.interface';
import { IBookRequest } from './interface/bookRequest.interface';

@Injectable()
export class BookService {
  constructor(
    private readonly client: BookClient,
    private readonly bookConfig: BookConfig,
  ) {}

  async getCategories(bookRequest: IBookRequest): Promise<IBook[]> {
    const result = await this.client.get(this.bookConfig.bookPath, {
      bookRequest,
    });

    if (result && result.data && !result.data.error) {
      return BookAdapter.mapperBookResponse(result.data);
    } else {
      throw new Error('Error getting identifiers ');
    }
  }
}
