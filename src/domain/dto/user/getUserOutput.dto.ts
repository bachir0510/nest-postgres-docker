import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class GetUserOutputDTO {
  @ApiProperty({
    description: 'Id',
    type: String,
  })
  @IsOptional()
  @IsNumber()
  id: number;

  @ApiProperty({
    description: 'UserName',
    type: String,
  })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  userName: string;

  @ApiProperty({
    description: 'Email',
    type: String,
  })
  @IsEmail()
  @MaxLength(100)
  email: string;

  @ApiProperty({
    description: 'Passord',
    type: String,
  })
  @MaxLength(150)
  password: string;

  @ApiProperty({
    description: 'Passord',
    type: String,
  })
  @MaxLength(150)
  active: boolean;

  @ApiProperty({
    description: 'Passord',
    type: String,
  })
  @MaxLength(150)
  activationToken: string;

  @ApiProperty({
    description: 'Passord',
    type: String,
  })
  @MaxLength(150)
  refreshtoken: string;

  @ApiProperty({
    description: 'Passord',
    type: String,
  })
  @MaxLength(150)
  refreshtokenexpires: string;

  @ApiProperty({
    description: 'Passord',
    type: String,
  })
  @MaxLength(150)
  createdOn: Date;
}
