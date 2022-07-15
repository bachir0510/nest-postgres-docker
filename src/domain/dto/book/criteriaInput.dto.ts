import { ApiPropertyOptional } from '@nestjs/swagger';

export class CriteriaInputDto {
  @ApiPropertyOptional({
    type: String,
    example: 'libros',
  })
  criteria?: string;
}
