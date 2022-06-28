import { Injectable } from '@nestjs/common';
import { IBook } from '../interface/book.interface';

@Injectable()
export class BookAdapter {
  static maperUserResponse(data): IBook {
    return {
      id: data.id,
      title: data.title,
      author: data.author,
      categories: data.categorie,
    };
  }
}
