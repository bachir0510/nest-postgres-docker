import { ApiProperty } from '@nestjs/swagger';
import { Category } from '../../entity/category';

export class BookDTO {
  @ApiProperty({
    description: 'Id',
    type: Number,
  })
  id: number;

  @ApiProperty({
    description: 'Title',
    type: String,
  })
  title: string;

  @ApiProperty({
    description: 'Author',
    type: String,
  })
  author: string;

  @ApiProperty({
    description: 'Categories',
    type: [],
  })
  categories: Category[];
}
