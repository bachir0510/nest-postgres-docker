import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { BookAdapter } from './adapter/book.adapter';
import { IBook } from './interface/book.interface';

@Injectable()
export class BookClient {
  constructor(private readonly http: HttpService) {}

  async get(): Promise<IBook> {
    const host = 'http://www.etnassoft.com/api/v1/';
    const path = '/get?category=libros';

    const new_instance = axios.create({
      baseURL: host,
      timeout: 10000,
      headers: {
        Accept: 'application/json',
      },
    });

    const request: AxiosResponse | void = await new_instance({
      method: 'get',
      url: path,
    }).catch((e) => console.log(e));
    console.log(request);

    return BookAdapter.maperUserResponse(request);
  }
}
