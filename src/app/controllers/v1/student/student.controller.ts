import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateStudentDTO } from '../../../../domain/dto/student/createStudent.dto';
import { UpdateStudentDTO } from '../../../../domain/dto/student/updateStudent.dto';
import { Student } from '../../../../domain/entitys/student.entity';
import {
  CreateStudent,
  GetByIdStudent,
  GetStudents,
  DeleteSutdent,
  UpdateStudent,
} from '../../../../domain/use_cases/student';

@ApiTags('Student')
@Controller('student')
export class StudentController {
  constructor(
    private readonly createStudent: CreateStudent,
    private readonly getSudents: GetStudents,
    private readonly getByIdSudent: GetByIdStudent,
    private readonly upDataSudent: UpdateStudent,
    private readonly deteStudent: DeleteSutdent,
  ) {}

  @Get()
  async getAll(): Promise<Student[]> {
    return await this.getSudents.call();
  }

  @Get(':id')
  async getOne(@Param('id') id: number) {
    return await this.getByIdSudent.call(id);
  }

  @Post()
  async create(@Body() studentDTO: CreateStudentDTO): Promise<Student> {
    return await this.createStudent.call(studentDTO);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() studentDTO: UpdateStudentDTO) {
    return await this.upDataSudent.call(id, studentDTO);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<any> {
    return this.deteStudent.call(id);
  }
}
