import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateStudentDTO } from '../../../../domain/dto/student/createStudent.dto';
import { UpdateStudentDTO } from '../../../../domain/dto/student/updateStudent.dto';

import { CreatStudent, GetSutdents} from '../../../../domain/use_cases/student';

@Controller('student')
export class StudentController {
  constructor(
    private readonly getSudents: GetSutdents,
    private readonly createStudent: CreatStudent,
   
  ) {}

  @Get()
  async getAll()  {
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
