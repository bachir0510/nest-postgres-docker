import { ApiPropertyOptional } from '@nestjs/swagger';

export class GetBookInputDto {
  @ApiPropertyOptional({
    type: String,
    example: 'libros',
  })
  category?: string;
}
