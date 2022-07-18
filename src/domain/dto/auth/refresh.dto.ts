import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class RefreshTokenDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  refreshToken: string;

  @ApiProperty()
  refreshtokenexpires;
}
