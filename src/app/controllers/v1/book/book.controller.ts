import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { BookDTO } from '../../../../domain/dto/book/book.dto';
import { GetBookInputDto } from '../../../../domain/dto/book/getBook.dto';
import { GetBookApi } from '../../../../domain/use_cases/book/getApi.book';

@ApiTags('books')
@Controller('book')
export class BookController {
  constructor(private readonly getBook: GetBookApi) {}

  @Get()
  @ApiOperation({
    description: 'Return Books from Api',
  })
  async findAll(@Query() input: GetBookInputDto): Promise<BookDTO[]> {
    return await this.getBook.call(input);
  }
}
