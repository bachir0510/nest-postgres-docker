import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { Book } from '../../domain/entity/book.entity';
import { BookAdapter } from './adapter/book.adapter';

@Injectable()
export class BookClient {
  constructor(private readonly http: HttpService) {}

  async get(): Promise<Book[]> {
    const host = 'http://www.etnassoft.com/api/v1/';
    const path = '/get?category=libros';

    const newInstance = axios.create({
      baseURL: host,
      timeout: 10000,
      headers: {
        Accept: 'application/json',
      },
    });

    const request: AxiosResponse = await newInstance({
      method: 'get',
      url: path,
    });
    console.log(request.data);
    return BookAdapter.mapperBookResponse(request.data);
  }
}
