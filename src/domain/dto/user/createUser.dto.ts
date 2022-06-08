import {
    IsEmail,
    IsOptional,
    IsString,
    MaxLength,
    MinLength,
  } from 'class-validator';
  
  export class CreateUserDTO {
    @IsOptional()
    @IsString()
    @MaxLength(100)
    userName: string;
  
    @IsEmail()
    @MaxLength(100)
    email: string;
  
    @MinLength(6)
    @MaxLength(150)
    password: string;
  }
  