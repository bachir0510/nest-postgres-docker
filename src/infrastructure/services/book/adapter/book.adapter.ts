import { Injectable } from '@nestjs/common';
import { Book } from '../../../../domain/entity/book.entity';
import { Category } from '../../../../domain/entity/category';
import { IBookResponse } from '../interface/bookResponse.interface';

@Injectable()
export class BookAdapter {
  static mapperBookResponse(data: IBookResponse[]): Book[] {
    return data.map((book) => {
      return {
        id: book.ID,
        author: book.author,
        title: book.title,
        categories: this.mapperCategory(book),
      };
    });
  }

  private static mapperCategory(book: IBookResponse): Category[] {
    return book.categories.map((category) => {
      return {
        id: category.category_id,
        name: category.name,
        nicename: category.nicename,
      };
    });
  }
}
