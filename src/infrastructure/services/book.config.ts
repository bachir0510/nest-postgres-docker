import { Injectable } from '@nestjs/common';

@Injectable()
export class BookConfig {
  public bookUrl: string;

  constructor() {
    this.bookUrl = 'http://www.etnassoft.com/api/v1/';
  }
}
