import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Book } from '../../../domain/entity/book.entity';
import { BookAdapter } from './adapter/book.adapter';
import { BookClient } from './book.client';

const path = '/get?category=libros';

@Injectable()
export class BookService {
  constructor(private readonly client: BookClient) {}

  async getCategorys(url: string): Promise<Book[]> {
    const result = await this.client.get(path);

    if (result && result.data && !result.data.error) {
      return BookAdapter.mapperBookResponse(result.data);
    } else {
      throw new UnauthorizedException('Error getting identifiers ');
    }
  }
}
