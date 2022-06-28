import { ICategorie } from './categorie.interface';

export interface IBook {
  id: number;
  title: string;
  author: string;
  categories: ICategorie[];
}
