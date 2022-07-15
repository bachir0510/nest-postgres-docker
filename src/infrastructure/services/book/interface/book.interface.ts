import { ICategory } from './category.interface';

export interface IBook {
  id: number;
  title: string;
  author: string;
  content: string;
  urlDetails: string;
  categories: ICategory[];
}
