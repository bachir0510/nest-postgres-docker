import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { BookDTO } from '../../../../domain/dto/book/book.dto';
import { CatetoryInputDto } from '../../../../domain/dto/book/categoryInput.dto';
import { CriteriaInputDto } from '../../../../domain/dto/book/criteriaInput.dto';
import { GetBookApi } from '../../../../domain/use_cases/book/getApi.book';

@ApiTags('Books')
@Controller('book')
export class BookController {
  constructor(private readonly getBook: GetBookApi) {}

  @Get()
  @ApiOperation({
    description: 'Return Books from Api',
  })
  async findAll(
    @Query('category') categoryInput: CatetoryInputDto,
    @Query('criteria') criteriaInput: CriteriaInputDto,
  ): Promise<BookDTO[]> {
    return this.getBook.call(categoryInput, criteriaInput);
  }
}
