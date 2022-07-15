import { ICategoryResponse } from './categoryResponse.interface';

export interface IBookResponse {
  ID: number;
  title: string;
  author: string;
  content: string;
  url_details: string;
  categories: ICategoryResponse[];
}
