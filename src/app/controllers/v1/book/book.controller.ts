import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { BookDTO } from '../../../../domain/dto/book/book.dto';
import { BookInputDto } from '../../../../domain/dto/book/bookInput.dto';
import { GetBookApi } from '../../../../domain/use_cases/book/getApi.book';

@ApiTags('Books')
@Controller('book')
export class BookController {
  constructor(private readonly getBook: GetBookApi) {}

  @Get()
  @ApiOperation({
    description: 'Return Books from Api',
  })
  async findAll(@Query() bookInput: BookInputDto): Promise<BookDTO[]> {
    return this.getBook.call(bookInput);
  }
}
