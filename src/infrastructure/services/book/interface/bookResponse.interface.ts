import { ICategory } from './categorie.interface';

export interface IBookResponse {
  ID: number;
  title: string;
  author: string;
  content: string;
  url_details: string;
  categories: ICategory[];
}
