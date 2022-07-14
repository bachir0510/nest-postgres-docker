import { Book } from '../src/domain/entity/book.entity';

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
