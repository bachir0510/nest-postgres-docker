import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class GetStudentOutputDTO {
  @ApiProperty({
    description: 'Id',
    type: String,
  })
  @IsOptional()
  @IsNumber()
  id: number;

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
    description: 'ClassGroup',
    type: String,
  })
  @IsOptional()
  @IsString()
  classGroup: string;
}
