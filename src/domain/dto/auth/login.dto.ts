import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    description: 'Id',
    type: Number,
  })
  @IsNotEmpty()
  id: number;

  @ApiProperty({
    description: 'Email',
    type: String,
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Password',
    type: String,
  })
  @IsNotEmpty()
  @Length(6, 50)
  password: string;
}
