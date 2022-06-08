import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateStudentDTO } from '../../../../domain/dto/student/createStudent.dto';
import { UpdateStudentDTO } from '../../../../domain/dto/student/updateStudent.dto';
import { Student } from '../../../../domain/entitys/student.entity';
import {
  CreateStudent,
  GetByIdStudent,
  GetStudents,
  DeleteStudent,
  UpdateStudent,
} from '../../../../domain/use_cases/student';

@ApiTags('Student')
@Controller('student')
export class StudentController {
  constructor(
    private readonly createStudent: CreateStudent,
    private readonly getSudents: GetStudents,
    private readonly getByIdSudent: GetByIdStudent,
    private readonly upDateSudent: UpdateStudent,
    private readonly deteStudent: DeleteStudent,
  ) {}

  @Get()
  @ApiOperation({
    description: 'Return all student',
  })
  async getAll(): Promise<Student[]> {
    return this.getSudents.call();
  }

  @Post()
  @ApiOperation({
    description: 'Create a new student',
  })
  async create(@Body() studentDTO: CreateStudentDTO): Promise<Student> {
    return this.createStudent.call(studentDTO);
  }

  @Get(':id')
  @ApiOperation({
    description: 'Return one student by id',
  })
  async getOne(@Param('id') id: number): Promise<Student> {
    return this.getByIdSudent.call(id);
  }

  @Put(':id')
  @ApiOperation({
    description: 'Update student information by id ',
  })
  async update(@Param('id') id: number, @Body() studentDTO: UpdateStudentDTO) {
    return this.upDateSudent.call(id, studentDTO);
  }

  @Delete(':id')
  @ApiOperation({
    description: 'delete student by id ',
  })
  delete(@Param('id') id: number): Promise<Student> {
    return this.deteStudent.call(id);
  }
}
