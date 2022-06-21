import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class RefreshTokenDto {
  @ApiProperty({
    description: 'Resfresh token',
    type: String,
  })
  @IsNotEmpty()
  refreshToken: string;
}
