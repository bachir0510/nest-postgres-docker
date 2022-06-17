import { ApiProperty } from '@nestjs/swagger';
<<<<<<< HEAD
import { IsOptional, IsString } from 'class-validator';

export class CreateStudentDTO {
  @ApiProperty({
    description: 'Nia',
    type: String,
  })
  @IsOptional()
  @IsString()
  nia: string;

  @ApiProperty({
    description: 'Name',
    type: String,
  })
  @IsOptional()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Last Name',
    type: String,
  })
  @IsOptional()
  @IsString()
  lastName: string;

  @ApiProperty({
    description: 'Mother Name',
    type: String,
  })
  @IsOptional()
  @IsString()
  motherName: string;

  @ApiProperty({
    description: 'Group',
    type: String,
  })
  @IsOptional()
  @IsString()
  group: string;

  @ApiProperty({
    description: 'Class Group',
    type: String,
  })
  @IsOptional()
  @IsString()
=======

export class CreateStudentDTO {
  @ApiProperty({
    description: 'The nia of a student',
    type: String,
  })
  nia: string;

  @ApiProperty({
    description: 'The name of a student',
    type: String,
  })
  name: string;

  @ApiProperty({
    description: 'The lastname of a student',
    type: String,
  })
  lastName: string;

  @ApiProperty({
    description: 'The mother name  of a student',
    type: String,
  })
  motherName: string;

  @ApiProperty({
    description: 'The group of a student',
    type: String,
  })
  group: string;

  @ApiProperty({
    description: 'The classGroup of a student',
    type: String,
  })
>>>>>>> develop
  classGroup: string;
}
