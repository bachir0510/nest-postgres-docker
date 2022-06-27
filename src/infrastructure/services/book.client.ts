import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

import fetch from 'cross-fetch';

const urlOpenLibra = ' www.etnassoft.com/api/v1/get/?category=libros ';
const urlItBook = 'https://api.itbook.store/1.0/new';

@Injectable()
export class BookClient {
  constructor(private readonly http: HttpService) {}

  async get() {
    const response = fetch(urlOpenLibra)
      .then((result) => result.json())
      .then((resp) => console.log(resp));

    return response;
  }
}
