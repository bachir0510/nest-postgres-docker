import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { BookConfig } from '../book.config';

@Injectable()
export class BookClient {
  constructor(private readonly bookConfig: BookConfig) {}

  async get(
    url: string,
    queryParams?: object,
    contentType = 'application/json',
  ) {
    const newInstance = axios.create({
      params: queryParams,
      baseURL: this.bookConfig.bookUrl,
      headers: {
        Accept: contentType,
      },
    });

    const request: AxiosResponse = await newInstance({
      method: 'get',
      url: url,
    });
    return request;
  }
}
