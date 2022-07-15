import { Injectable } from '@nestjs/common';
import { ConfigService } from '../../config.service';

@Injectable()
export class BookConfig {
  public bookUrl: string;
  public bookPath: string;

  constructor() {
    this.bookUrl = ConfigService.get('BOOK_BASE_URL');
    this.bookPath = '/get';
  }
}
