import { Injectable } from '@nestjs/common';
import { BookService } from '../../../infrastructure/services/book/book.service';
import { IBook } from '../../../infrastructure/services/book/interface/book.interface';
import { BookDTO } from '../../dto/book/book.dto';
import { BookInputDto } from '../../dto/book/bookInput.dto';

@Injectable()
export class GetBookApi {
  constructor(private readonly bookService: BookService) {}

  async call(bookInput: BookInputDto): Promise<BookDTO[]> {
    const books = await this.bookService.getCategories(bookInput);
    return this.modelBookDTO(books);
  }

  private modelBookDTO(response: IBook[]): BookDTO[] {
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
