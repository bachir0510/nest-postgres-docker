import { ApiProperty } from '@nestjs/swagger';

export class UpDateStudentDTO {
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
  classGroup: string;
}
