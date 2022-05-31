import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateStudentDTO } from '../../../../domain/dto/student/createStudent.dto';
import { UpdateStudentDTO } from '../../../../domain/dto/student/updateStudent.dto';
import {
  CreateStudent,
  GetStudents,
} from '../../../../domain/use_cases/student';

@ApiTags('Student')
@Controller('student')
export class StudentController {
  constructor(
    private readonly createStudent: CreateStudent,
    private readonly getSudents: GetStudents,
  ) {}

  @Get()
  async getAll() {
    return await this.getSudents.call();
  }

  //  @Get(':id')
  // async getOne(@Param('id') id: number) {
  //   return await this.getByIdStudent.call(id);
  // }

  @Post()
  async create(@Body() studentDTO: CreateStudentDTO) {
    return await this.createStudent.call(studentDTO);
  }

  // @Put(':id')
  // async update(@Body() studentDTO: UpdateStudentDTO, @Param('id') id: number)  {
  //   return await this.updateStudent.callDos(id, studentDTO);
  // }

  // @Delete(':id')
  // delete(@Param('id') id: string) {
  //   return this.deleteStudent.call(id);
  // }
}
