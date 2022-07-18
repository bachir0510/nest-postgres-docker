import { Book } from '../src/domain/entity/book.entity';
import { IBook } from '../src/infrastructure/services/book/interface/book.interface';

export const mockBookEntity: Book = {
  id: 11,
  title: 'Sahara',
  author: 'Yolanda Sobero',
  categories: [
    {
      id: 206,
      name: 'Ciencia',
      nicename: 'ciencia',
    },
  ],
};

export const mockBookInterface: IBook = {
  id: 11,
  title: 'Sahara',
  author: 'Yolanda Sobero',
  content: 'ss',
  urlDetails: 'rrl',
  categories: [
    {
      categoryId: 206,
      name: 'Ciencia',
      nicename: 'ciencia',
    },
  ],
};
