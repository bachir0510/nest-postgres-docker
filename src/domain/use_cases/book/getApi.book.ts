import { Injectable } from '@nestjs/common';
import { BookService } from '../../../infrastructure/services/book/book.service';
import { IBook } from '../../../infrastructure/services/book/interface/book.interface';
import { BookDTO } from '../../dto/book/book.dto';
import { GetBookInputDto } from '../../dto/book/getBook.dto';

@Injectable()
export class GetBookApi {
  constructor(private readonly bookService: BookService) {}

  async call(input: GetBookInputDto): Promise<BookDTO[]> {
    const books = await this.bookService.getCategories(input);
    return this.modelBookDTO(books);
  }

  modelBookDTO(response: IBook[]): BookDTO[] {
    return response.map((ibook) => {
      return {
        ...ibook,
        categories: ibook.categories.map((icategory) => {
          return {
            ...icategory,
            id: icategory.categoryId,
          };
        }),
      };
    });
  }
}
