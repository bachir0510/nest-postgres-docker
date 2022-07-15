import { ApiPropertyOptional } from '@nestjs/swagger';

export class CatetoryInputDto {
  @ApiPropertyOptional({
    type: String,
    example: 'libros',
  })
  category?: string;
}
