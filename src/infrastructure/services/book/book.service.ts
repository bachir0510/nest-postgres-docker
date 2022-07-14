import { Injectable, UnauthorizedException } from '@nestjs/common';
import { GetBookInputDto } from '../../../domain/dto/book/getBook.dto';
import { Book } from '../../../domain/entity/book.entity';
import { BookConfig } from '../book.config';
import { BookAdapter } from './adapter/book.adapter';
import { BookClient } from './book.client';

@Injectable()
export class BookService {
  constructor(
    private readonly client: BookClient,
    private readonly bookConfig: BookConfig,
  ) {}

  async getCategorys(input: GetBookInputDto): Promise<Book[]> {
    const result = await this.client.get(this.bookConfig.bookPath, input);

    if (result && result.data && !result.data.error) {
      return BookAdapter.mapperBookResponse(result.data);
    } else {
      throw new UnauthorizedException('Error getting identifiers ');
    }
  }
}
