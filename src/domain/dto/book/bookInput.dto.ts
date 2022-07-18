import { ApiPropertyOptional } from '@nestjs/swagger';

export class BookInputDto {
  @ApiPropertyOptional({
    type: String,
    example: 'libros',
  })
  category: string;

  @ApiPropertyOptional({
    type: String,
    example: 'most_viewed',
  })
  criteria?: string;
}
