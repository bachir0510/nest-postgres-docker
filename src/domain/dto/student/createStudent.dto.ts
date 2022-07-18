import { ApiProperty } from '@nestjs/swagger';
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
  classGroup: string;
}
