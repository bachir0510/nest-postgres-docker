import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import axios from "axios";
import { BookAdapter } from './adapter/book.adapter';
import { IBook } from './interface/book.interface';


@Injectable()
export class BookService {
  constructor(private readonly http: HttpService) {}

  async getCategorys(): Promise<IBook> {
    const url = 'https://api.itbook.store/1.0/new'
    const urlOnenLibra = 'https://www.etnassoft.com/api/v1/get/?category=libros'
    const response = await (await axios.get(url)).data
    
    console.log(response);
    return BookAdapter.maperUserResponse(response)
  }
}
