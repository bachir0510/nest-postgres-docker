import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { GetBookApi } from '../../../../domain/use_cases/book/getApi.book';

@ApiTags('books')
@Controller('book')
export class BookController {
  constructor(private readonly getBook: GetBookApi) {}

  @Get()
  @ApiOperation({
    description: 'Return Books from Api',
  })
  async findAll(url: string) {
    return await this.getBook.call(url);
  }
}
