import { Injectable } from '@nestjs/common';
import { BookService } from '../../../infrastructure/services/book/book.service';
import { BookDTO } from '../../dto/book/book.dto';
import { GetBookInputDto } from '../../dto/book/getBook.dto';

@Injectable()
export class GetBookApi {
  constructor(private readonly bookService: BookService) {}

  async call(input: GetBookInputDto): Promise<BookDTO[]> {
    return await this.bookService.getCategorys(input);
  }
}
