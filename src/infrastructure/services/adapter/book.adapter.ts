import { Injectable } from '@nestjs/common';
import { IBook } from '../interface/book.interface';

@Injectable()
export class BookAdapter {
  static maperUserResponse(data) {
    const urlData: IBook = [
      {
        id: data.id,
        title: data.title,
        author: data.author,
        categories: data.categories,
      },
    ];

    const response = urlData.map((itm) => {
      return {
        id: data.id,
        title: data.title,
        author: data.author,
        categories: data.categories,
      };
    });
    return response;
  }
}
