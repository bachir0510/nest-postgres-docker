
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import stringify from 'fast-json-stable-stringify';
import { ApiErrors, IDomainError } from './type.error';

export class ApiErrorDto {
  @ApiProperty({
    enum: Object.values(ApiErrors).map((e: IDomainError) => e.code),
    example: ApiErrors.UNKNOWN_API_ERROR.code,
  })
  code: number;

  @ApiProperty({
    enum: Object.values(ApiErrors).map(
      (e: IDomainError) => `[${e.code}] ${e.message}`,
    ),
    example: ApiErrors.UNKNOWN_API_ERROR.message,
  })
  message: string;

  @ApiPropertyOptional({
    enum: Object.values(ApiErrors)
      .filter((e: IDomainError) => e.extraInfo)
      .map((e: IDomainError) => `[${e.code}] ${stringify(e.extraInfo)}`),
  })
  extraInfo?: object;
}
