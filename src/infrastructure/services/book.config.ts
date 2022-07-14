import { Injectable } from '@nestjs/common';

@Injectable()
export class BookConfig {
  public bookUrl: string;
  public bookPath: string;

  constructor() {
    this.bookUrl = 'http://www.etnassoft.com/api/v1/';
    this.bookPath = '/get';
  }
}
