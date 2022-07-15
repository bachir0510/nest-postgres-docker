import { Injectable } from '@nestjs/common';
import { Book } from '../../../../domain/entity/book.entity';
import { Category } from '../../../../domain/entity/category';
import { IBook } from '../interface/book.interface';
import { IBookResponse } from '../interface/bookResponse.interface';
import { ICategory } from '../interface/category.interface';

@Injectable()
export class BookAdapter {
  static mapperBookResponse(data: IBookResponse[]): IBook[] {
    return data.map((book) => {
      return {
        id: book.ID,
        content: book.content,
        urlDetails: book.url_details,
        author: book.author,
        title: book.title,
        categories: this.mapperCategory(book),
      };
    });
  }

  private static mapperCategory(book: IBookResponse): ICategory[] {
    return book.categories.map((category) => {
      return {
        categoryId: category.category_id,
        name: category.name,
        nicename: category.nicename,
      };
    });
  }
}
